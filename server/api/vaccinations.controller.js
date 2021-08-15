import VaccinationsDAO from '../dao/vaccinationsDAO.js'

export default class VaccinationsController {
	static async apiGetVaccinations(req, res, next) {
		const vaccinationsPerPage = req.query.vaccinationsPerPage
			? parseInt(req.query.vaccinationsPerPage, 10)
			: 20

		const page = req.query.page ? parseInt(req.query.page, 10) : 0

		let filters = {}
		if (req.query.vaccinationDate) {
			filters.vaccinationDate = req.query.vaccinationDate
		} else if (req.query.gender) {
			filters.gender = req.query.gender
		}

		const { vaccinationsList, totalNumVaccinations } =
			await VaccinationsDAO.getVaccinations({
				// filters,
				page,
				vaccinationsPerPage,
			})

		let response = {
			vaccinations: vaccinationsList,
			page: page,
			filters: filters,
			entries_per_page: vaccinationsPerPage,
			total_results: totalNumVaccinations,
		}
		res.json(response)
	}
}
