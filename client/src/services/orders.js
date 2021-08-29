import { ordersURL } from '../http-common'

class OrderDataService {
	getAll(page = 0) {
		return ordersURL.get()
	}
}

export default new OrderDataService()
