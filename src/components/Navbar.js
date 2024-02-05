import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid container">
				<Link className="navbar-brand" aria-current="page" to={'/'}>
					QuadShow
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={'/'}>
								Home
							</Link>
						</li>
					</ul>
					<Link to={'/about'}>About</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
