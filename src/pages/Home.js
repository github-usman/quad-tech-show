import React, { useEffect, useState } from 'react'
import MainCard from '../components/HomeCard'
import '../style/app.css'
import Spinner from '../components/Spinner'

const Home = () => {
	const [showData, setShowData] = useState(null)
	const [loading, setLoading] = useState(true)
	const URI = process.env.REACT_APP_API_URL

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URI)
				const data = await response.json()
				setShowData(data)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
		// eslint-disable-next-line
	}, [])

	return (
		<div className="summary-card-main my-5 container">
			{loading ? (
				<Spinner />
			) : (
				<div className="row">
					{showData &&
						showData.map((apiData, index) => (
							<MainCard key={index} apiData={apiData} />
						))}
				</div>
			)}
		</div>
	)
}

export default Home
