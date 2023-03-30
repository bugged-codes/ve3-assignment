import React, { useContext } from 'react';
import GridLogo from '../components/GridLogo';
import WomenImg from '../components/WomenImg';
import { context } from '../data/ContextData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import '../style/pages.css';

const Home = () => {
	const [contextData] = useContext(context);
	console.log('Context is: ', contextData);
	return (
		<div className="page home">
			<GridLogo />
			<WomenImg id={contextData[0].id} img={contextData[0].imgPath} img2={contextData[1].imgPath} />
			<div className="home-text">
				<h1>Fusce sem magna pharetra cursus</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
				<Link className="home-enter-link" to={'/page2'}>
					<button>
						Enter
						<FontAwesomeIcon icon={faArrowRightLong} />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
