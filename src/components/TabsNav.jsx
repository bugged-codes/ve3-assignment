import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TabCard from './TabCard';
import '../style/components.css';

const TabsNav = (props) => {
	const { data } = props;
	console.log('data in tabsNav props is:', data);
	const [isVisible1, setIsVisible1] = useState(true);
	const [isVisible2, setIsVisible2] = useState(false);
	const [isVisible3, setIsVisible3] = useState(false);
	const handleTab1 = () => {
		if (isVisible1 === false) {
			setIsVisible1((i) => !i);
		}

		if (isVisible2 === true) {
			setIsVisible2((j) => !j);
		} else if (isVisible3 === true) {
			setIsVisible3((k) => !k);
		}
	};
	const handleTab2 = () => {
		if (isVisible2 === false) {
			setIsVisible2((i) => !i);
		}

		if (isVisible1 === true) {
			setIsVisible1((j) => !j);
		} else if (isVisible3 === true) {
			setIsVisible3((k) => !k);
		}
	};
	const handleTab3 = () => {
		if (isVisible3 === false) {
			setIsVisible3((i) => !i);
		}

		if (isVisible1 === true) {
			setIsVisible1((j) => !j);
		} else if (isVisible2 === true) {
			setIsVisible2((k) => !k);
		}
	};
	return (
		<div className="tabsNav-component components">
			<div className="tabsNav-wrapper">
				<div className="tabsNav-link-container">
					<NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')} onClick={handleTab1}>
						<div>{data[0].tabName}</div>
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')} onClick={handleTab2}>
						<div>{data[0].tabName}</div>
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')} onClick={handleTab3}>
						<div>{data[0].tabName}</div>
					</NavLink>
				</div>
				{isVisible1 && (
					<div className={isVisible1 ? 'visible-tabDescription' : 'hidden-tabDescription'}>
						{isVisible1 && (
							<TabCard
								fromNavData={data.filter((item) => {
									return item.tabNo === 1;
								})}
							/>
						)}
					</div>
				)}
				{isVisible2 && (
					<div className={isVisible2 ? 'visible-tabDescription' : 'hidden-tabDescription'}>
						{isVisible2 && (
							<TabCard
								fromNavData={data.filter((item) => {
									return item.tabNo === 2;
								})}
							/>
						)}
					</div>
				)}
				{isVisible3 && (
					<div className={isVisible3 ? 'visible-tabDescription' : 'hidden-tabDescription'}>
						{isVisible3 && (
							<TabCard
								fromNavData={data.filter((item) => {
									return item.tabNo === 3;
								})}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default TabsNav;
