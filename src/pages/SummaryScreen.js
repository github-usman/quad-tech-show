import React from 'react';
import star from '../components/assets/star.png';

const SummaryScreen = () => {
	const apiData = JSON.parse(sessionStorage.getItem('apiData'));
	const [hours,minutes] = (apiData.show.schedule.time).split(':').map(Number);
	return (
		<div>
			{apiData && (
				<>
					<div className='welcome-poster'>
						<div className='summary-images'>
							<div className='summary-images-inner'>
								<img
									src={
										apiData.show.image !== null
											? apiData.show.image.medium
											: 'https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg'
									}
									alt={apiData.show.name || 'movei name'}
								/>
								<img
									src={
										apiData.show.image !== null
											? apiData.show.image.original
											: 'https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg'
									}
									alt={apiData.show.name || 'movei name'}
								/>
							</div>
							<div>
								<div className='image-btn-box'>
									<h1>{apiData.show.name}</h1>
									<div className='image-btn-child  mt-3'>
										<img src={star} alt='star' />
										<h3 className='mt-1'>
											{apiData.show.rating.average !== null ? apiData.show.rating.average : 5.5}
											/10
										</h3>
										<p className='mt-2'>{(apiData.show.externals.thetvdb / 1000).toFixed(1)}k Views</p>
									</div>
									
									<p style={{backgroundColor:"white",color:"black",width:'fit-content',padding:'0.1rem'}}>{apiData.show.language}</p>
									<div className='image-box-details'>
									<p>{hours}h {minutes}m</p>
									{apiData.show.genres.map(element => (
										<p>{element}</p>
									))}
									
									<p>{new Date(apiData.show.ended).toDateString()}</p>
									</div>
									<button className='btn btn-danger btn-lg mt-3'>Book Show</button>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<p>{apiData.score}</p>
						{/* <p>{apiData.show.id}</p> */}
						<p>{apiData.show.url}</p>
						<p>{apiData.show.name}</p>
						<p>{apiData.show.type} = type</p>
						
						
						<p>{apiData.show.status}</p>

						
						<p>{apiData.show.averageRuntime}</p>
						<p>{apiData.show.premiered}</p>
						<p>{apiData.show.ended}</p>
						<p>{apiData.show.officialSite}</p>
						
						<p>{apiData.show.schedule.days}</p>
						<p>{apiData.show.rating.average}</p>
						<p>{apiData.show.rating.average}</p>
						<p>{apiData.show.weight}</p>
						{/* <p>{apiData.show.network.id}</p> */}
						{/* <p>{apiData.show.network.name}</p> */}
						{/* <p>{apiData.show.network.country.name}</p> */}
						{/* <p>{apiData.show.network.country.code}</p> */}
						{/* <p>{apiData.show.network.country.timezone}</p> */}
						{/* <p>{apiData.show.network.officialSite}</p> */}
						{/* <p>{apiData.show.network.webChannel}</p> */}
						{/* <p>{apiData.show.network.dvdCountry}</p> */}
						<p>{apiData.show.externals.tvrage}</p>
						<p>{apiData.show.externals.thetvdb}</p>
						<p>{apiData.show.externals.imdb}</p>
						<p>{apiData.show.summary}</p>
						<p>{apiData.show.updated}</p>
						{/* <p>{apiData.show._links.self.href}</p> */}
						{/* <p>{apiData.show._links.previousepisode.href}</p> */}
					</div>
				</>
			)}
		</div>
	);
};

export default SummaryScreen;
