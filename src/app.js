import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true,

}))
app.use(express.json({
    limit: "16kb"
}))

// routes
import schoolRoutes from './routes/schoolRoutes.js'

app.use('/api/v1', schoolRoutes)

export default app