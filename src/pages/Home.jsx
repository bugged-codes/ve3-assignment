import React, { useContext } from 'react';
import GridLogo from '../components/GridLogo';
import WomenImg from '../components/WomenImg';
import context from '../data/ContextData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import '../style/pages.css';

const Home = () => {
	const { data } = useContext(context);
	console.log('Context is: ', data);
	return (
		<div className="page home">
			<GridLogo />
			<WomenImg id={data[0].id} img1={[data[0].imgPath, data[0].imgAlt]} img2={[data[1].imgPath, data[1].imgAlt]} />
			<div className="home-text">
				<h1>Fusce sem magna pharetra cursus</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
				<Link className="home-enter-link" to={'/page2'}>
					<div>
						Enter
						<FontAwesomeIcon icon={faArrowRightLong} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
