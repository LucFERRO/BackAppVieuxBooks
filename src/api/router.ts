import { Router } from "express";
import { swaggerRouter } from "./swagger"

import { bookController } from "../controller/book.controller";
import { listController } from "../controller/list.controller";

export const router = Router()

router.use('/docs', swaggerRouter)
router.use('/books', bookController)
router.use('/list', listController)

router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Ressource not found.' })
})