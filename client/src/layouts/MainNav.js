import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainNav = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark color-white bg-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						ROKOTE INFO KESKUS
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='/'>
									Dashboard
								</a>
							</li>
							<li className='nav-item'>
								<Link to={'/vacs-table'} className='nav-link'>
									Vaccinations Table
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/antiqua'} className='nav-link'>
									Antiqua
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/solar-buddhica'} className='nav-link'>
									Solar Buddhica
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/zerpfy'} className='nav-link'>
									Zerpfy
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default MainNav
