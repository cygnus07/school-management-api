import pool from '../db/index.js'
import { haversineDistance } from '../utils/haversine.js'

export const addSchool = async (req,res) => {
    const { name, address, latitude, longitude } = req.body
    if(!name || !address || !latitude || !longitude)
        return res.status(400).json({ message: "All fields are required"})

    try {
        const [result] = await pool.query(
            'Insert into schools (name, address, latitiude, longitude) values (?,?,?,?)',
            [name, address, latitude, longitude]
        )
        res.status(201).json({ message: "School added successfully", id: result.insertId})
    } catch (error) {
        res.status(500).json({ message: "Error while adding the school"})
    }
}


export const listSchools = async (req,res) => {
    const {latitude, longitude} = req.query
    if(!latitude || !longitude)
        return res.status(400).json({ message: "Latitude and longitude are required"})

    try {
        const [schools] = await pool.query('Select * from schools')

        const sortedSchools = schools.map(
            (school) => ({
                ...school,
                distance: haversineDistance(
                    parseFloat(latitude),
                    parseFloat(longitude),
                    school.latitude,
                    school.longitude
                )
            })
        ).sort( (a,b) => a.distance - b.distance)

        res.status(200).json(sortedSchools)
    } catch (error) {
        res.status(500).json({ message: "Error while getting the schools"})
    }
}