import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg ">
			<div class="container-fluid container">
				<Link class="navbar-brand" aria-current="page" to={'/'}>
					QuadShow
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link class="nav-link active" aria-current="page" to={'/'}>
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
