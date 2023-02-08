import { Router } from "express";
import { swaggerRouter } from "./swagger"

// import { doctorController } from '../controller/doctor.controller'

export const router = Router()

router.use('/docs', swaggerRouter)

// router.use('/doctors', doctorController)

router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Ressource not found.' })
})