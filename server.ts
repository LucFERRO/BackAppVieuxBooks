// require('dotenv').config()
import 'dotenv/config'
import { Response, Request } from 'express'
import { databaseConnection } from './src/database/connect'
import { apiRouter } from './src/api/api.router'

import cors from 'cors'
import express from 'express'
import helmet from 'helmet';

const app = express()
app.use(cors())

app.use(express.json())
app.use(helmet())
app.disable('x-powered-by')
app.use(apiRouter)

databaseConnection().catch(err => console.log(err));

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})