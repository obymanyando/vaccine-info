import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
	const [value, setValue] = useState(filter)

	/**
	 * AsyncDebounce hook helps pause filtering until you're done typing
	 */
	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined)
	}, 300)

	return (
		<span>
			<h5>
				Search:{' '}
				<input
					value={value || ''}
					onChange={(e) => {
						setValue(e.target.value)
						onChange(e.target.value)
					}}
				/>
			</h5>
		</span>
	)
}
