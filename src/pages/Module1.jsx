import React, { useContext } from 'react';
import context from '../data/ContextData';
import HomePageRoute from '../components/HomePageRoute';
import TabsNav from '../components/TabsNav';
import GridLogo from '../components/GridLogo';
import SearchPageRoute from '../components/SearchPageRoute';
import '../style/components.css';
import '../style/pages.css';

const Module1 = () => {
	const { data } = useContext(context);
	const filterdData = data.filter((item) => item.moduleName === 'Module One');
	console.log('filterdData is:', filterdData);
	return (
		<div className="modules ">
			<h1>{filterdData[0].moduleName}</h1>
			<HomePageRoute />
			<TabsNav data={filterdData} />
			<GridLogo className="bottomPage-gridLogo" />
			<SearchPageRoute />
		</div>
	);
};

export default Module1;
