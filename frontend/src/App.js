import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { FilteringTable } from './components/FilteringTable'
import { Pagination } from './components/Pagination'
import { SortingTable } from './components/SortingTable'
import { VaccinationsTable } from './components/VaccinationsTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import Orders from './pages/Orders'
import Antiqua from './pages/Antiqua'
import SolarBuddhica from './pages/SolarBuddhica'
import Zerpfy from './pages/Zerpfy'
import MainNav from './layouts/MainNav'

function App() {
	return (
		<div className='App'>
			<MainNav />
			<header className='App-header'>
				<h1>THL VACCINE TRACKING SYSTEM</h1>
			</header>
			<hr />
			<Switch>
				<Route path={('/', '/pagination')} exact>
					<Pagination />
				</Route>
				<Route path={'/orders'}>
					<Orders />
				</Route>
				<Route path={'/antiqua'}>
					<Antiqua />
				</Route>
				<Route path={'/solar-buddhica'}>
					<SolarBuddhica />
				</Route>
				<Route path={'/zerpfy'}>
					<Zerpfy />
				</Route>
			</Switch>
			{/* <VaccinationsTable /> */}
		</div>
	)
}

export default App
