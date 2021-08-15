/** First, we create a var. that we're going to use to store a reference to our db */
let vaccinations

export default class VaccinationsDAO {
	/** We initially connect to our db using the inject method as soon as the server starst */
	static async injectDB(conn) {
		if (vaccinations) {
			return
		}
		try {
			vaccinations = await conn
				.db(process.env.VACCINEDB_NS)
				.collection('vaccinations')
		} catch (e) {
			console.error(
				`Unable to establish a collection handle in vaccinationsDAO: ${e}`,
			)
		}
	}

	/** Then we get all vaccination data */
	static async getVaccinations({
		filters = null,
		page = 0,
		vaccinationsPerPage = 20,
	} = {}) {
		/** Query may stay empty if no filters are added */
		let query
		if (filters) {
			if ('gender' in filters) {
				query = { gender: { $eq: filters['gender'] } }
			} else if ('vaccinationDate' in filters) {
				query = { vaccinationDate: { $in: filters['vaccinationDate'] } }
			}
		}
		/** We will recieve all vaccinations returned based on the filters in the query. If no filters, all vaccinations are returnrd */
		let cursor

		try {
			cursor = await vaccinations.find(query)
		} catch (e) {
			console.error(`Unable to issue find command, ${e}`)
			return { vaccinationsList: [], totalNumVaccinations: 0 }
		}

		/** Here we limit the pages returned to our default 20 but also get the actual page number. Skip() helps us skip from current page to specific page */
		const displayCursor = cursor
			.limit(vaccinationsPerPage)
			.skip(vaccinationsPerPage * page)
		/** Now we set the vaccinationsList to an array and return the array  */
		try {
			const vaccinationsList = await displayCursor.toArray()
			const totalNumVaccinations = await vaccinations.countDocuments(query)

			return {
				vaccinationsList,
				totalNumVaccinations,
			}
		} catch (e) {
			console.error(
				`Unable to convert cursor to array or problem counting documents, ${e} `,
			)
			return { vaccinationsList: [], totalNumVaccinations: 0 }
		}
	}
}
