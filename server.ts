// require('dotenv').config()
import 'dotenv/config'
import { Response, Request } from 'express'
import { databaseConnection } from './src/database/connect'
import { apiRouter } from './src/api/api.router'

const cors = require('cors')
const express = require("express")
const app = express()
app.use(cors())

app.use(express.json())
app.disable('x-powered-by')
app.use(apiRouter)

databaseConnection()

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})