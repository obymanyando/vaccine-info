import http from '../http-common'

class VaccineDataService {
	getAll(page = 0) {
		return http.get()
	}
}

export default new VaccineDataService()
