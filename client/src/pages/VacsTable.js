import React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { useTable, usePagination } from 'react-table'
// import VACCINATION_DATA from '../data/vaccinations.json'
import { COLUMNS } from '../components/columns'
import '../components/vaccinationTable.css'
// import vaccine from '../services/vaccine'
import VaccineDataService from '../services/vaccine'

const VacsTable = () => {
	const [vaccines, setVaccines] = useState([])
	//we use the useMemo hook below to tell react not to re-create all the data on every render.

	const getVaccines = useEffect(() => {
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

	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => getVaccines, [])
	console.log(getVaccines)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		canNextPage,
		canPreviousPage,
		previousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		state,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
			// initialState: { pageIndex: 0 },
		},
		usePagination,
	)

	const { pageIndex, pageSize } = state
	return (
		<div>
			<h3>Current Vaccination status</h3>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
			<div>
				<span>
					Page:{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{' '}
				</span>
				<span>
					| Go to Page:
					<input
						type='number'
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
							gotoPage(pageNumber)
						}}
						style={{ width: '50px' }}
					/>
					{` | `}
				</span>
				<select
					value={pageSize}
					onChange={(e) => setPageSize(Number(e.target.value))}>
					{[10, 25, 50, 100].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					{'<<'}
				</button>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					Previous
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{' '}
					Next
				</button>
				<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
					{'>>'}
				</button>
			</div>
		</div>
	)
}

export default VacsTable
