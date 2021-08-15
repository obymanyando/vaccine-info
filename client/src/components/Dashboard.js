import React, { useState, useEffect } from 'react'
import VaccineDataService from '../services/vaccine'
import { VaccinationsTable } from './VaccinationsTable'
import { Link } from 'react-router-dom'
import vaccine from '../services/vaccine'
import DashTemplate from './DashTemplate'

const Dashboard = (props) => {
	const [vaccines, setVaccines] = useState([])
	const [antiquaOrders, setAntiquaOrders] = useState([])
	const [solarOrders, setSolarOrders] = useState([])
	const [zerpfyOrders, setZerpfyOrders] = useState([])

	useEffect(() => {
		getVaccinations()
		// getOrders()
	}, [])

	const getVaccinations = () => {
		VaccineDataService.getAll()
			.then((res) => {
				console.log(res.data.vaccinations)
				const converted = Object.values(res.data.vaccinations)
				const convertCopy = { ...converted }

				console.log(converted)
				console.log(convertCopy)
				// for (const key in res.data) {
				// 	const vaccine = {
				// 		id: key,
				// 		...res.data[key],
				// 	}
				// 	vaccines.push(vaccine)
				// }
				setVaccines(converted)
				console.log(vaccines)
			})
			.catch((e) => {
				console.log(e)
			})
	}
	return (
		<div>
			<h3>Welcome to your dashbaord. </h3>
			<p>Here you will find summaries of vaccine orders and vaccinations.</p>

			{/* <ul>{mapping}</ul> */}
			{/* {Object.keys(vaccines).map((item, i) => (
				<li className='travelcompany-input' key={i}>
					<span className='input-label'>{vaccines[item].gender}</span>
				</li>
			))} */}
			<DashTemplate vaccines={vaccines} />

			{/* <VaccinationsTable /> */}
		</div>
	)
}

export default Dashboard
