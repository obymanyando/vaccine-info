import express from 'express'
import cors from 'cors'
import vaccinations from './api/vaccinations.route.js'
// import orders from './api/orders.route.js'

const app = express()

app.use(cors())
app.use(express.json()) //we use this insrtead of json bodyParser

app.use('/api/v1/vaccinations', vaccinations)
// app.use('/api/v1/orders', orders)
app.use('*', (req, res) => res.status(404).json({ error: 'page not found' }))

export default app
//the idea here is to separate our main server code from our app code
