import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../style/pages.css';

const HomePageRoute = (props) => {
	// console.log('HomePageRoute props are: ', props.className);
	return (
		<>
			<Link id="link2home" to={'/'} className={props.className}>
				<FontAwesomeIcon icon={faHouse} style={{ color: '#b0b0b0' }} size="lg" />
			</Link>
		</>
	);
};

export default HomePageRoute;
