import React from 'react'
import star from '../components/assets/star.png'
import { Link } from 'react-router-dom'

const SummaryScreen = () => {
	const apiData = JSON.parse(sessionStorage.getItem('apiData'))
	const [hours, minutes] = apiData.show.schedule.time.split(':').map(Number)
	return (
		<div>
			{apiData && (
				<>
					{/* image design and access or uppper side */}
					<div className="welcome-poster">
						<div className="summary-images">
							<div className="summary-images-inner">
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
								<div className="image-btn-box">
									<h2>{apiData.show.name}</h2>
									<div className="image-btn-child  mt-3">
										<img src={star} alt="star" />
										<h4 className="mt-1">
											{apiData.show.rating.average !== null
												? apiData.show.rating.average
												: 5.5}
											/10
										</h4>
										<p className="mt-3">
											{(apiData.show.externals.thetvdb / 1000).toFixed(1)}k
											Views
										</p>
									</div>
									<div className="d-flex">
										<p
											style={{
												backgroundColor: 'white',
												color: 'black',
												width: 'fit-content',
												padding: '0.1rem',
												borderRadius: '4px',
												display: 'block',
											}}
										>
											{apiData.show.language}
										</p>
										<p
											style={{
												backgroundColor: 'white',
												color: 'black',
												width: 'fit-content',
												padding: '0.1rem',
												borderRadius: '4px',
												display: 'block',
											}}
											className="mx-2"
										>
											{apiData.show.network.country.name}
										</p>
									</div>
									<div className="image-box-details">
										<p>
											{hours}h {minutes}m &nbsp;&nbsp;<b>.</b>
										</p>
										{apiData.show.genres.map((element) => (
											<p>{element},</p>
										))}
										<b>.</b>
										<p>{new Date(apiData.show.ended).toDateString()}</p>
									</div>
									<Link
										to={`/book/${apiData.show.name}`}
										className="btn btn-danger btn-lg mt-3"
									>
										Book Show
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* bottom side of summary page */}
					<div className="container mt-3">
						<h4 className=" d-inline">About the Show </h4>{' '}
						<span
							className={`badge bg-${
								apiData.show.status === 'Running' ? 'success' : 'danger'
							}`}
						>
							{apiData.show.status}{' '}
						</span>
						<p dangerouslySetInnerHTML={{ __html: apiData.show.summary }}></p>
						<div className="premier">
							<a
								href={apiData.show.url}
								className="btn btn-outline-success me-5 mb-2"
							>
								Know more...
							</a>
							<a
								href={apiData.show.officialSite}
								className="btn btn-outline-warning mb-2"
							>
								Got to Official Website
							</a>
							<hr className="my-5" />
						</div>
						<h4>Important details:</h4>
						<ul className="d-flex flex-column gap-4">
							<li>Show type : {apiData.show.type}</li>

							<li>Average Runtime : {apiData.show.averageRuntime}</li>
							<li>Days : {apiData.show.schedule.days}</li>
							<li>Average Runtime : {apiData.show.averageRuntime}</li>
							<li>TVRAge : {apiData.show.externals.tvrage}</li>
							<li>The tvdb : {apiData.show.externals.thetvdb}</li>
							<li>IMDB : {apiData.show.externals.imdb}</li>
						</ul>
						<div className="d-flex premier justify-content-between">
							<p class="btn btn-danger me-5 ">
								Show premiered date : {apiData.show.premiered}
							</p>
							<p class="btn btn-dark">Show ended date : {apiData.show.ended}</p>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default SummaryScreen
