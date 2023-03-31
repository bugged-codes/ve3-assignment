import React from 'react';

const TabCard = (props) => {
	console.log('props received from TabNav are: ', props.fromNavData);
	return (
		<div>
			<h1>{props.fromNavData[0].tabNo}</h1>
			<div>1</div>
		</div>
	);
};

export default TabCard;
