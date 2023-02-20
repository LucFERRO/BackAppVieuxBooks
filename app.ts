// require('dotenv').config()
import * as dotenv from 'dotenv'
import { apiRouter } from './src/api/api.router'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet';
import unexpectedErrorMiddleware from './src/middleware/error.global';

var cron = require('node-cron');

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())
app.use(helmet())
app.disable('x-powered-by')
app.use(apiRouter)
app.use(unexpectedErrorMiddleware)

export default app

//TEST CRON

import { exportedBookRepository, exportedSpotRepository } from './src/core/initialisation'
import axios from 'axios'
import { BookDTO } from './src/dto/book.dto'

export const cronFunction = () => {

    const numberOfWeeksBeforeMail = 5

    cron.schedule('*0 10 9 * * *', async () => {
        const books = (await exportedBookRepository.findAll()).filter(book => {
            if (!book.date) return false
            return new Date(book.date.getTime() + 1000 * 60 * 60 * 24 * 7 * numberOfWeeksBeforeMail) <= new Date()
        })
        books.forEach((book: BookDTO, i) => {
            axios.post('http://141.94.247.187:3000/api/v1/send', {
                code: book.user_id,
                subject: "Livre à rendre",
                message: `Cela fait 5 semaines que vous avez emprunté avec le livre ${book.name}. Veuillez le ramener à un spot le plus vite possible.`
            })
        })
    });

    cron.schedule('0 10 9 * * *', async () => {
        const spotData = { address: `Spot créé par le cron le : ${new Date()}` }
        await exportedSpotRepository.create(spotData)
    });
}