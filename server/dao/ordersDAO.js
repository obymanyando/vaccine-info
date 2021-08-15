/** First, we create a var. that we're going to use to store a reference to our db */
let orders

export default class OrdersDAO {
	/** We initially connect to our db using the inject method as soon as the server starst */
	static async injectDB(conn) {
		if (orders) {
			return
		}
		try {
			orders = await conn.db(process.env.VACCINEDB_NS).collection('orders')
		} catch (e) {
			console.error(
				`Unable to establish a collection handle in ordersDAO: ${e}`,
			)
		}
	}

	/** Then we get all vaccination data */
	static async getOrders({ page = 0, OrdersPerPage = 50 } = {}) {
		/** Query may stay empty if no filters are added */
		let query
		if (filters) {
			if ('order' in filters) {
				query = { order: { $eq: filters['order'] } }
			} else if ('vaccine' in filters) {
				query = { vaccine: { $in: filters['vaccine'] } }
			}
		}
		/** We will recieve all orders returned based on the filters in the query. If no filters, all orders are returned */
		let cursor

		try {
			cursor = await orders.find(query)
		} catch (e) {
			console.error(`Unable to issue find command, ${e}`)
			return { ordersList: [], totalNumOrders: 0 }
		}

		/** Here we limit the pages returned to our default 20 but also get the actual page number. Skip() helps us skip from current page to specific page */
		const displayCursor = cursor.limit(ordersPerPage).skip(ordersPerPage * page)
		/** Now we set the ordersList to an array and return the array  */
		try {
			const ordersList = await displayCursor.toArray()
			const totalNumOrders = await orders.countDocuments(query)

			return {
				ordersList,
				totalNumOrders,
			}
		} catch (e) {
			console.error(
				`Unable to convert cursor to array or problem counting documents, ${e} `,
			)
			return { ordersList: [], totalNumOrders: 0 }
		}
	}
}
