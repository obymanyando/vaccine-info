import express from 'express'
import vaccinationsCtrl from './vaccinations.controller.js'
// import ordersCtrl from './orders.controller.js'

const router = express.Router()

router.route('/').get(vaccinationsCtrl.apiGetVaccinations)
// router.route('/').get(ordersCtrl.apiGetOrders)

export default router
