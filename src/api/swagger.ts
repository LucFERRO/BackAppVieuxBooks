const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const express = require("express")

export const swaggerRouter = express.Router()

const swaggerOptions = {
    openapi: "3.0.1",
    swaggerDefinition: {
        info: {
            title: 'API TEMPLATE',
            description: 'SWAGGER',
            contact: {
                name: ''
            }
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
        security: [
            {
                bearerAuth: []
            }
        ],
    },
    apis: [`./src/controller/*.controller.ts`]
}

const swaggerOptions2 = {
    customCss: '.swagger-ui .topbar { display: none }', 
    // .opblock-tag-section {background: red !important;}
    
    customSiteTitle: "TopDoc API",
    // customfavIcon: "/assets/favicon.ico"
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs,swaggerOptions2))