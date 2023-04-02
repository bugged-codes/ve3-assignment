import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../style/components.css';

const SearchPageRoute = () => {
	return (
		<div className="searchPageRoute-container">
			<Link to={'/search'}>
				<FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{ color: '#0d4f86' }} />
			</Link>
		</div>
	);
};

export default SearchPageRoute;
