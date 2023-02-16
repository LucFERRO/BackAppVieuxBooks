import { Request, Response } from "express";
import { IApiService } from "../core/service.interface";

export class ListHandler {

    private listService: IApiService

    constructor(service: IApiService) {
        this.listService = service
    }

    getList = async (req: Request, res: Response) => {
        try {
            const result = await this.listService.listAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    login = async (req: Request, res: Response) => {
        const { name, code } = req.body
        try {
            const result: any = await this.listService.login(name, code);
            if (!result.admin) return res.status(403).json({ login: false, message: 'This user is not an admin.' })
            res.status(200).json({ login: true, user: result })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}