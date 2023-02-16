// require('dotenv').config()
import 'dotenv/config'
import { Response, Request } from 'express'
import { databaseConnection } from './src/database/connect'
import { apiRouter } from './src/api/api.router'

import cors from 'cors'
import express from 'express'
import helmet from 'helmet';

var cron = require('node-cron');

const app = express()
app.use(cors())

app.use(express.json())
app.use(helmet())
app.disable('x-powered-by')
app.use(apiRouter)

databaseConnection().catch(err => console.log(err));


//TEST CRON
import { exportedBookRepository, exportedSpotRepository } from './src/core/initialisation'
import axios from 'axios'
import { BookDTO } from './src/dto/book.dto'
const numberOfWeeksBeforeMail = 5

cron.schedule('* * 0 * * *', async () => {
    const books = (await exportedBookRepository.findAll()).filter(book => {
        if (!book.date) return false
        return new Date(book.date.getTime() + 1000 * 60 * 60 * 24 * 7 * numberOfWeeksBeforeMail) <= new Date()
    })
    books.forEach((book: BookDTO, i) => {
        axios.post('http://141.94.247.187:3000/api/v1/send', {
            code: book.user_id,
            subject: "Rends l'argent!",
            message: `ça fait 5 semaines que tu dors avec le livre ${book.name}!!!`
        })
    })
});

cron.schedule('* * 0 * * *', async () => {
    const spotData = {address: `Spot créé par le cron le : ${new Date()}`}
    await exportedSpotRepository.create(spotData)
});

///

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})