import React, { useContext } from 'react';
import { context } from '../data/ContextData';
import HomePageRoute from '../components/HomePageRoute';
import TabsNav from '../components/TabsNav';
import GridLogo from '../components/GridLogo';
import '../style/components.css';
import '../style/pages.css';

const Module2 = () => {
	const [contextData] = useContext(context);
	const filterdData = contextData.filter((item) => item.moduleName === 'Module Two');
	console.log('filterdData is:', filterdData);
	return (
		<div className="modules ">
			<h1>{filterdData[0].moduleName}</h1>
			<HomePageRoute />
			<TabsNav data={filterdData} />
			<GridLogo className="bottomPage-gridLogo" />
		</div>
	);
};

export default Module2;
