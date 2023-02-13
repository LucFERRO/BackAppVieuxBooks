import { Router } from "express";
import { swaggerRouter } from "./swagger"

import { listController } from "../controller/list.controller";
import { bookController } from "../controller/book.controller";
import { spotController } from "../controller/spot.controller";

export const router = Router()

router.use('/docs', swaggerRouter)
router.use('/list', listController)
router.use('/books', bookController)
router.use('/spots', spotController)

router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Ressource not found.' })
})