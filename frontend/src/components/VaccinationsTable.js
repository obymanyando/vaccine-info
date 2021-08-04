import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import VACCINATION_DATA from '../data/vaccinations.json'
import { COLUMNS } from './columns'
import './vaccinationTable.css'

export const VaccinationsTable = () => {
	//we use the useMemo hook below to tell react not to re-create all the data on every render.
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => VACCINATION_DATA, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	})

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
					{rows.map((row) => {
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
				<tfoot>
					{footerGroups.map((footerGroup) => (
						<tr {...footerGroup.getHeaderGroupProps()}>
							{footerGroup.headers.map((column) => (
								<td {...column.getHeaderProps()}>{column.render('Footer')}</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</div>
	)
}
