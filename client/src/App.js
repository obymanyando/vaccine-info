import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
// import { FilteringTable } from './components/FilteringTable'
// import { Pagination } from './components/Pagination'
// import { SortingTable } from './components/SortingTable'
// import { VaccinationsTable } from './components/VaccinationsTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import Antiqua from './pages/Antiqua'
import SolarBuddhica from './pages/SolarBuddhica'
import Zerpfy from './pages/Zerpfy'
import MainNav from './layouts/MainNav'
import Dashboard from './components/Dashboard'
import VacsTable from './pages/VacsTable'
import OrdersTable from './pages/OrdersTable'

function App() {
	return (
		<div>
			<MainNav />
			<div className='App'>
				<header className='App-header'>
					<h1>THL VACCINE TRACKING SYSTEM</h1>
				</header>
				<hr />
				<Switch>
					{/* <Route path={'/'} exact>
						
						<Dashboard />
					</Route> */}
					<Route path={'/'} exact>
						<OrdersTable />
					</Route>
					<Route path={'/vacs-table'} exact>
						<VacsTable />
					</Route>
					<Route path={'/antiqua'} exact>
						<Antiqua />
					</Route>
					<Route path={'/solar-buddhica'} exact>
						<SolarBuddhica />
					</Route>
					<Route path={'/zerpfy'} exact>
						<Zerpfy />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
