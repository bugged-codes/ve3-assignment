import React from 'react';
import HomePageRoute from '../components/HomePageRoute';
import SearchContext from '../components/SearchContext';
import GridLogo from '../components/GridLogo';
import '../style/app.css';
import '../style/components.css';
import '../style/pages.css';

const SearchPage = () => {
	return (
		<div className="search-page">
			<HomePageRoute />
			<SearchContext />
			<GridLogo className="bottomPage-gridLogo searchPage-gridLogo" />
		</div>
	);
};

export default SearchPage;
