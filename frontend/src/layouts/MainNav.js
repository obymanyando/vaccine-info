import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainNav = () => {
	return (
		<div>
			<nav
				className='navbar navbar-expand-lg navbar-light bg-light'
				id='nav-custom'>
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
								<Link to={'/'} className='nav-link active' aria-current='page'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/orders'} className='nav-link'>
									Orders
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/antiqua'} className='nav-link'>
									Antiqua
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/solar-buddhica'} exact className='nav-link'>
									Solar Buddhica
								</Link>
							</li>

							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Suppliers
								</a>
								<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
									<li>
										<Link to={'antiqua'} className='dropdown-item'>
											Antiqua
										</Link>
									</li>
									<li>
										<Link to={'/solar-budhica'} className='dropdown-item'>
											Solar Buddhica
										</Link>
									</li>
									<li>
										<Link to={'/zerpfy'} className='dropdown-item'>
											Zerpfy
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default MainNav

// <ul className='nav na-tabs justify-content-end'>
// 			<li className='nav-item'>
// 				<a className='nav-link active' aria-current='page' href='#'>
// 					ROKOTE INFO KESKUS
// 				</a>
// 			</li>
// 			<li className='nav-item'>
// 				<Link to={'/'} className='nav-link'>
// 					Dashboard
// 				</Link>
// 			</li>

// 			<li className='nav-item'>
// 				<Link to={'/antiqua'} className='nav-link'>
// 					Antiqua
// 				</Link>
// 			</li>
// 			<li className='nav-item'>
// 				<Link to={'/solar-buddhica'} className='nav-link'>
// 					Solar Buddhica
// 				</Link>
// 			</li>
// 			<li className='nav-item'>
// 				<Link to={'/zerpfy'} className='nav-link'>
// 					Zerpfy
// 				</Link>
// 			</li>
// 		</ul>