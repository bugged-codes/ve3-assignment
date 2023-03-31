import React, { useContext, useState } from 'react';
import GridLogo from '../components/GridLogo';
import WomenImg from '../components/WomenImg';
import HomePageRoute from '../components/HomePageRoute';
import { context } from '../data/ContextData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import '../style/pages.css';

const Page2 = () => {
	const [contextData] = useContext(context);
	const [isClicked, setIsClicked] = useState(false);
	const handleHighlight = () => {
		setIsClicked((curr) => !curr);
		// console.log('button clicked');
		setTimeout(() => {
			setIsClicked((curr) => !curr);
		}, 250);
	};
	return (
		<div className="page page-2">
			<GridLogo />
			<WomenImg id={contextData[0].id} img={contextData[0].imgPath} img2={contextData[1].imgPath} />
			<HomePageRoute className={`${isClicked ? 'anim-highlight' : ''}`} />
			<div className="p2-link-container">
				<Link to={'/module-1'} className={`${isClicked ? 'anim-highlight' : ''}`}>
					<div className="p2-links2modules ">Module One</div>
				</Link>
				<Link to={'/module-2'} className={`${isClicked ? 'anim-highlight' : ''}`}>
					<div className="p2-links2modules">Module Two</div>
				</Link>
				<Link to={'/module-3'} className={`${isClicked ? 'anim-highlight' : ''}`}>
					<div className="p2-links2modules">Module Three</div>
				</Link>
				<Link to={'/module-4'} className={`${isClicked ? 'anim-highlight' : ''}`}>
					<div className="p2-links2modules">Module Four</div>
				</Link>
				<Link to={'/module-5'} className={`${isClicked ? 'anim-highlight' : ''}`}>
					<div className="p2-links2modules">Module Five</div>
				</Link>
			</div>
			<div className="p2-enter" onClick={handleHighlight}>
				Enter
				<FontAwesomeIcon icon={faArrowRightLong} />
			</div>
		</div>
	);
};

export default Page2;
