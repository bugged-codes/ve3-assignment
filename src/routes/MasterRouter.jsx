import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextData from '../data/ContextData';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';

const MasterRouter = () => {
	return (
		<ContextData>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page2" element={<Page2 />} />
			</Routes>
		</ContextData>
	);
};

export default MasterRouter;
