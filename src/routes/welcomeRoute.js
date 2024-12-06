import express from 'express'

const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({ message: "Welcome to the School Management api! \n go to /addSchool to add a new school \n go to /listSchools?latitude=32.45345&longitude=67.918068791"})
})


export default router