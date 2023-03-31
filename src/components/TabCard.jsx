import React from 'react';
import '../style/components.css';

const TabCard = (props) => {
	console.log('props received from TabNav are: ', props.fromNavData);
	return (
		<>
			{/* <h1>{props.fromNavData[0].tabNo}</h1> */}
			<div className="tabCard-container">
				<img className="tabCard-img" src={process.env.PUBLIC_URL + props.fromNavData[0].imgPath} alt={props.fromNavData[0].imgAlt} />
				<div className="tabCard-text-container">
					<div className="tabCard-title">{props.fromNavData[0].titleText}</div>
					<div className="tabCard-description">{props.fromNavData[0].descriptionText.slice(0, 400)}</div>
				</div>
			</div>
		</>
	);
};

export default TabCard;
