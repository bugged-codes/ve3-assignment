import React, { useContext } from 'react';
import GridLogo from '../components/GridLogo';
import WomenImg from '../components/WomenImg';
import { context } from '../data/ContextData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../style/pages.css';

const Page2 = () => {
	const [contextData] = useContext(context);
	return (
		<div className="page page-2">
			<GridLogo />
			<WomenImg id={contextData[0].id} img={contextData[0].imgPath} img2={contextData[1].imgPath} />
			<Link className="link2home" to={'/'}>
				<FontAwesomeIcon icon={faHouse} style={{ color: '#b0b0b0' }} size="2xl" />
			</Link>
		</div>
	);
};

export default Page2;
