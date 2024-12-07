import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true,

}))
app.use(express.json({}))

// routes
import schoolRoutes from './routes/schoolRoutes.js'
import welcomeRoute from './routes/welcomeRoute.js'

app.use('/', welcomeRoute)
app.use('/api/v1', schoolRoutes)
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});


export default app