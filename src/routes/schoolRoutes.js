import express from 'express'
import { addSchool, listSchools } from '../controllers/schoolControllers.js'

const router = express.Router()

router.post('/addSchool', addSchool)

router.get('/listSchool', listSchools)


export default router