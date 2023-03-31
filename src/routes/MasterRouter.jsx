import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextData from '../data/ContextData';
import Home from '../pages/Home';
import Module1 from '../pages/Module1';
import Module2 from '../pages/Module2';
import Module3 from '../pages/Module3';
import Module4 from '../pages/Module4';
import Module5 from '../pages/Module5';
import Page2 from '../pages/Page2';

const MasterRouter = () => {
	return (
		<ContextData>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page2" element={<Page2 />} />
				<Route path="/module-1" element={<Module1 />} />
				<Route path="/module-2" element={<Module2 />} />
				<Route path="/module-3" element={<Module3 />} />
				<Route path="/module-4" element={<Module4 />} />
				<Route path="/module-5" element={<Module5 />} />
			</Routes>
		</ContextData>
	);
};

export default MasterRouter;
