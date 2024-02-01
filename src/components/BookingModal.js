import '../style/app.css'

const BookingModal = () => {
	const apiData = JSON.parse(sessionStorage.getItem('apiData'))
	return (
		<div className="container form">
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						You Name
					</label>
					<input
						type="email"
						class="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Please Enter your Name"
						onChange={(e) => e.target.value}
					/>
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Name of the Show
					</label>
					<input
						type="email"
						class="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={apiData.show.name}
					/>
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Duration of the Show
					</label>
					<input
						type="email"
						class="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={apiData.show.averageRuntime + 'min'}
					/>
				</div>

				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Location of the show
					</label>
					<input
						type="email"
						class="form-control "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={apiData.show.name}
					/>
				</div>

				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input " id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" class="btn btn-danger align-self-center">
					Book
				</button>
			</form>
		</div>
	)
}

export default BookingModal
