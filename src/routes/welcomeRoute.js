import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the School Management API! \n" +
                 "Endpoints:\n" +
                 "1. POST /api/v1/addSchool - Add a new school.\n" +
                 "2. GET /api/v1/listSchools - List schools by proximity."
    });
});

export default router;
