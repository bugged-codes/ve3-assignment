import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../data/ContextData';
import HomePageRoute from '../components/HomePageRoute';

const Module4 = () => {
	const [contextData] = useContext(context);
	const filterdData = contextData.filter((item) => item.moduleName === 'Module Four');
	console.log('filterdData is:', filterdData);
	return (
		<div className="module4 modules page">
			<h1>{filterdData[0].moduleName}</h1>
			<HomePageRoute />
		</div>
	);
};

export default Module4;
