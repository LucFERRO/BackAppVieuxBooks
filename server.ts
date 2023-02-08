const cors = require('cors')
const express = require("express")
const app = express()
app.use(cors())

const templateRoutes = require("./routes/templateRoutes")
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

import {Response, Request} from 'express'

app.use(express.json())
//////////////////////////////////SA TENTE DES DOUILLES
app.use(express.urlencoded({extended:true}))
/////////////////////////////////////DANGER


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

app.get("/", (req :Request, res: Response) => {
    res.send("Ceci est la racine")
})

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'TEMPLATE API',
            description: 'TEMPLATE',
            contact: {
                name: 'Best front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url:`http://localhost:5000`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./routes/*.ts`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/templates', templateRoutes)