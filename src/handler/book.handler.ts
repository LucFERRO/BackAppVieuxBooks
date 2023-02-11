import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { BookDTO } from "../dto/book.dto";

export class BookHandler {

    private bookService: IService<BookDTO>

    constructor(service: IService<BookDTO>) {
        this.bookService = service
    }

    getBooks = async (req: Request, res: Response) => {
        try {
            const result = await this.bookService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    getBookById = async (req: Request, res: Response) => {
        let requestedId: string = req.params.id
        try {
            const result = await this.bookService.findById(requestedId);
            if (result === null) return res.status(404).json({ message: "Requested book_id does not exist." })
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'ERROR 500', err });
        }
    }

    createBook = async (req: Request, res: Response) => {
        try {
            const result = await this.bookService.create(req.body)
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    updateBook = async (req: Request, res: Response) => {
        const bookId = req.params.id
        const { name, author, state, spot_id } = req.body
        try {
            const result = await this.bookService.update({ name, author, state, spot_id }, bookId)
            if (result) return res.status(200).json({ message: 'Book successfully updated.' })
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    deleteBook = async (req: Request, res: Response) => {
        const id = req.params.id

        try {
            const result = await this.bookService.delete(id)
            if (result) return res.status(200).json({ message: 'Book successfully deleted.' })
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }
}