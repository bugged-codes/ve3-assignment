import React, { useContext, useState } from 'react';
import context from '../data/ContextData';
import SearchResult from './SearchResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../style/components.css';
import '../style/pages.css';

const SearchContext = () => {
	const { data } = useContext(context);
	// console.log(data);
	const [query, setQuery] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage, setResultsPerPage] = useState(3);

	const filterdData = data.filter((i) => {
		return i.titleText && i.titleText.toLowerCase().includes(query);
	});

	const lastResultIndex = currentPage * resultsPerPage;
	const firstResultIndex = lastResultIndex - resultsPerPage;
	const visibleResults = filterdData.slice(firstResultIndex, lastResultIndex);

	let pages = [];
	for (let i = 1; i <= Math.ceil(filterdData.length / resultsPerPage); i++) {
		pages.push(i);
	}

	const handleLeftArrow = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const handleRightArrow = () => {
		if (currentPage < pages.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	console.log('Querry is: ', query);
	return (
		<div className="searchBar-container">
			<div>Type here to search</div>
			<input
				type="text"
				name="searchQuery"
				value={query}
				placeholder="Search titles"
				onChange={(e) => {
					setQuery(e.target.value.toLowerCase());
				}}
			/>
			<hr style={{ border: 'none', height: '3px', backgroundColor: '#b0b0b0', borderRadius: '5px' }} />

			<p className={query.length > 0 ? 'search-no' : 'hidden'}>showing {filterdData.length} results</p>

			<ul className={query.length > 0 ? 'searchContext-ul' : 'hidden'}>
				{visibleResults.map((i, index) => {
					return <SearchResult imgSrc={i.imgPath} imgAlt={i.imgAlt} title={i.titleText} description={i.descriptionText.slice(0, 150)} key={index} className={query.length > 0 ? 'searchResult-container' : 'hidden'} />;
				})}
				<button id="searchContext-left-btn" className={currentPage > 1 ? 'active-btn' : 'passive-btn'} onClick={handleLeftArrow}>
					<FontAwesomeIcon icon={faChevronLeft} size="2xl" />
				</button>

				<button id="searchContext-right-btn" className={currentPage < pages.length || currentPage === 1 ? 'active-btn' : 'passive-btn'} onClick={handleRightArrow}>
					<FontAwesomeIcon icon={faChevronRight} size="2xl" />
				</button>
			</ul>
		</div>
	);
};

export default SearchContext;
