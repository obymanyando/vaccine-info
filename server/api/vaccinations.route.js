import express from 'express'
import vaccinationsCtrl from './vaccinations.controller.js'

const router = express.Router()

router.route('/').get(vaccinationsCtrl.apiGetVaccinations)

export default router
