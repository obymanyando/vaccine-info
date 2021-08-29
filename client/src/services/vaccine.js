import { vaccineURL } from '../http-common'

class VaccineDataService {
	getAll(page = 0) {
		return vaccineURL.get()
	}
}

export default new VaccineDataService()
