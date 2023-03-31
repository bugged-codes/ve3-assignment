import React, { useContext } from 'react';
import { context } from '../data/ContextData';
import HomePageRoute from '../components/HomePageRoute';
import TabsNav from '../components/TabsNav';
import '../style/components.css';

const Module5 = () => {
	const [contextData] = useContext(context);
	const filterdData = contextData.filter((item) => item.moduleName === 'Module Five');
	console.log('filterdData is:', filterdData);
	return (
		<div className="modules">
			<h1>{filterdData[0].moduleName}</h1>
			<HomePageRoute />
			<TabsNav data={filterdData} />
		</div>
	);
};

export default Module5;
