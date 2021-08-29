import axios from 'axios'

let vaccineURL = axios.create({
	baseURL: 'http://localhost:5000/api/v1/vaccinations',
	headers: {
		'Content-type': 'application/json',
	},
})

let ordersURL = axios.create({
	baseURL: 'http://localhost:5000/api/v1/orders',
	headers: {
		'Content-type': 'application/json',
	},
})

export { vaccineURL, ordersURL }
