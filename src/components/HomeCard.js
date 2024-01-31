import React from 'react';
import star from './assets/star.png';
import { Link } from 'react-router-dom/dist';

const HomeCard = ({ apiData }) => {
	const handleCardClick = () => {
		sessionStorage.setItem('apiData', JSON.stringify(apiData));
		console.log('in localStorage data is saved');
	};

	return (
		<div className=' col-lg-3 col-md-4 col-sm-6 main-card-main pt-2'>
			<div className='image-div'>
				<Link to={`/summary/${apiData.show.name}`} onClick={handleCardClick} className=''>
					<img
						src={
							apiData.show.image !== null
								? apiData.show.image.medium
								: 'https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg'
						}
						className='card-img-top'
						alt='test-happening'
					/>

					<div className='image-child'>
						<img src={star} alt='star' />
						<p>
							{apiData.show.rating.average !== null ? apiData.show.rating.average : 5.5}
							/10
						</p>
						<p>{(apiData.show.externals.thetvdb / 1000).toFixed(1)}k Views</p>
					</div>
				</Link>
			</div>
			<div className='pt-3 pb-5'>
				<Link to={{ pathname: '/summary', state: { apiData } }}>
					<h5 className='m-0 p-0'>{apiData.show.name}</h5>
					<p className='m-0 p-0 language'>{apiData.show.language}</p>
					<p
						className={`m-0 p-0 ${
							apiData.show.status === 'Running' ? 'text-warning' : 'text-danger'
						}`}
					>
						{apiData.show.status}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default HomeCard;
