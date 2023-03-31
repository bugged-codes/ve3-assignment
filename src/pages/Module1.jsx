import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../data/ContextData';
import TabsNav from '../components/TabsNav';
import HomePageRoute from '../components/HomePageRoute';

const Module1 = () => {
	const [contextData] = useContext(context);
	const filterdData = contextData.filter((item) => item.moduleName === 'Module One');
	console.log('filterdData is:', filterdData);
	return (
		<div className="module1 modules page">
			<h1>{filterdData[0].moduleName}</h1>
			<HomePageRoute />
			<TabsNav data={filterdData} />
		</div>
	);
};

export default Module1;
