import React from 'react';
import '../style/components.css';

const WomenImg = (props) => {
	const { img, img2 } = props;
	// console.log('Props data is: ', props);
	return (
		<div className="women-img-container">
			<img src={process.env.PUBLIC_URL + `${img}`} alt="Women" />
			<img src={process.env.PUBLIC_URL + `${img2}`} alt="Women" />
		</div>
	);
};

export default WomenImg;
