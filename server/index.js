import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import VaccinationsDAO from './dao/vaccinationsDAO.js'
// import OrdersDAO from './dao/ordersDAO.js'
dotenv.config()

/**First we connect to our db and check for errors. */
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(process.env.VACCINESDB_URI, {
	maxPoolSize: 50,
	wtimeoutMS: 2500,
	// useNewUrlParse: true,
})
	.catch((err) => {
		console.error(err.stack)
		process.exit(1)
	})
	/**Then we get our inital ref to the db and start  our server. */
	.then(async (client) => {
		await VaccinationsDAO.injectDB(client)
		app.listen(port, () => {
			console.log(`Listening on port ${port}. VaccinationDAO`)
		})

		// await OrdersDAO.injectDB(client)
		// app.listen(port, () => {
		// 	console.log(`Listening on port ${port}. OrdersDAO`)
		// })
	})
