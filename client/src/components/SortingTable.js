import React from 'react'
import { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import VACCINATION_DATA from '../data/vaccinations.json'
import { COLUMNS } from './columns'
import './vaccinationTable.css'

export const SortingTable = () => {
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => VACCINATION_DATA, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useSortBy,
	)

	return (
		<div>
			<h3>Current Vaccination status</h3>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span className='sortArrow'>
										{column.isSorted ? (
											column.isSortedDesc ? (
												<img
													// className='sortArrow'
													src='https://img.icons8.com/emoji/48/000000/up-arrow-emoji.png'
													alt='blah'
												/>
											) : (
												<img
													// className='sortArrow'
													src='https://img.icons8.com/emoji/48/000000/down-arrow-emoji.png'
													alt='blah'
												/>
											)
										) : (
											''
										)}
									</span>
								</th>
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
