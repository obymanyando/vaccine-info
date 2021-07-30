import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
	{
		Header: 'ID of VACCINE',
		Footer: 'ID of VACCINE',
		accessor: 'vaccination-id',
		// Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'SOURCE BOTTLE',
		Footer: 'SOURCE BOTTLE',
		accessor: 'sourceBottle',
		disableFilters: true,
	},
	{
		Header: 'GENDER',
		Footer: 'GENDER',
		accessor: 'gender',
	},
	{
		Header: 'VACCINATION DATE',
		Footer: 'VACCINATION DATE',
		accessor: 'vaccinationDate',
		// Cell: ({ value }) => {
		// 	return format(new Date(value), 'dd.mm.yyyy, h:mm')
		// },
	},
]

// If we wanted Header Groups, we would create them like this:
// export const COLUMN_GROUPS = [
// 	{
// 		Header: 'Ids',
// 		Footer: 'Ids',
// 		columns: [
// 			{
// 				Header: 'ID of VACCINE',
// 				Footer: 'ID of VACCINE',
// 				accessor: 'vaccination-id',
// 			},
// 			{
// 				Header: 'SOURCE BOTTLE',
// 				Footer: 'SOURCE BOTTLE',
// 				accessor: 'sourceBottle',
// 			},
// 		],
// 	},
// 	{
// 		Header: 'GENDER',
// 		Footer: 'GENDER',
// 		accessor: 'gender',
// 	},
// 	{
// 		Header: 'VACCINATION DATE',
// 		Footer: 'VACCINATION DATE',
// 		accessor: 'vaccinationDate',
// 	},
// ]
