import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import VACCINATION_DATA from '../data/vaccinations.json'
import { ColumnFilter } from './ColumnFilter'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import './vaccinationTable.css'

export const FilteringTable = () => {
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => VACCINATION_DATA, [])
	const defaultColumn = useMemo(() => {
		return { Filter: ColumnFilter }
	}, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		useFilters,
		useGlobalFilter,
	)

	const { globalFilter } = state

	return (
		<div>
			<h3>Current Vaccination status</h3>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
									<div>{column.canFilter ? column.render('Filter') : null}</div>
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
