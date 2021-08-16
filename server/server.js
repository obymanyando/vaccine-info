import express from 'express'
import cors from 'cors'
const path = require('path')
import vaccinations from './api/vaccinations.route.js'

// import orders from './api/orders.route.js'

const app = express()

app.use(cors())
app.use(express.json()) //we use this insrtead of json bodyParser

//Use Routes
app.use('/api/v1/vaccinations', vaccinations)
// app.use('/api/v1/orders', orders)
app.use('*', (req, res) => res.status(404).json({ error: 'page not found' }))

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}
export default app
//the idea here is to separate our main server code from our app code
