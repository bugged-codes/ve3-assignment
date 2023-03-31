import React from 'react';
import '../style/components.css';

const WomenImg = (props) => {
	const { img1, img2 } = props;
	console.log('Props data is: ', props);
	return (
		<div className="women-img-container">
			<img src={process.env.PUBLIC_URL + img1[0]} alt={img1[1]} />
			<img src={process.env.PUBLIC_URL + img2[0]} alt={img2[1]} />
		</div>
	);
};

export default WomenImg;
