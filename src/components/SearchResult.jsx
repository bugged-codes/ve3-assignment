import React from 'react';
import '../style/components.css';
import '../style/pages.css';

const SearchResult = ({ imgSrc, imgAlt, title, description }) => {
	return (
		<div id="searchResult">
			<div className="searchResult-img-wrapper">
				<img src={process.env.PUBLIC_URL + imgSrc} alt={imgAlt} />
			</div>
			<div className="searchResult-text-wrapper">
				<div className="searchResult-title">{title}</div>
				<div className="searchResult-desc">{description}</div>
			</div>
		</div>
	);
};

export default SearchResult;
