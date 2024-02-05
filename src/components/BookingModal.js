import '../style/app.css'

const BookingModal = () => {
	const apiData = JSON.parse(sessionStorage.getItem('apiData'))
	return (
		<div className="container form">
			{apiData.show &&
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						You Name
					</label>
					<input
						type="email"
						className="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Please Enter your Name"
						onChange={(e) => e.target.value}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Name of the Show
					</label>
					<input
						type="email"
						className="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={apiData.show.name}
						onChange={(e) => e.target.value}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Duration of the Show
					</label>
					<input
						type="email"
						className="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={apiData.show.averageRuntime + 'min'}
						onChange={(e) => e.target.value}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Location of the show
					</label>
					<input
						type="email"
						className="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={(apiData.show && apiData.show.network && apiData.show.network.country) === '' ?'': apiData.show.network.country.name+" , "+apiData.show.network.country.timezone}
						onChange={(e) => e.target.value}
					/>
				</div>

				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input " id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-danger align-self-center">
					Book
				</button>
			</form>
			}
		</div>
	)
}

export default BookingModal
