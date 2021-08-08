import React from 'react'
import http from '../http-common'

class VaccineDataService {
	getAll(page = 0) {
		return http.get(`?page=${page}`)
	}
}

export default VaccineDataService()
