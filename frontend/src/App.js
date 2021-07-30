import './App.css'
import { FilteringTable } from './components/FilteringTable'
import { Pagination } from './components/Pagination'
import { SortingTable } from './components/SortingTable'
// import { VaccinationsTable } from './components/VaccinationsTable'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>THL VACCINE TRACKING SYSTEM</h1>
			</header>
			<Pagination />
		</div>
	)
}

export default App
