import React from 'react'

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column
	return (
		<span>
			<h5>
				Search:{' '}
				<input
					value={filterValue || ''}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</h5>
		</span>
	)
}
