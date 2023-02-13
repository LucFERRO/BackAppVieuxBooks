import { IService } from "../core/service.interface";
import { BookDTO } from "../dto/book.dto"
const bcrypt = require("bcrypt");

export class BookService implements IService<BookDTO> {

    private bookRepository: IService<BookDTO>;

    constructor(_bookRepository: IService<BookDTO>) {
        this.bookRepository = _bookRepository;
    }

    async findAll(): Promise<BookDTO[]> {
        return this.bookRepository.findAll()
    }

    async findById(id: string): Promise<BookDTO | null> {
        return this.bookRepository.findById(id)
    }

    async create(data: BookDTO): Promise<BookDTO | undefined> {
        return this.bookRepository.create(data)
    }

    async update(data: BookDTO, id: string): Promise<string | boolean | undefined> {
        const today = new Date()
        return this.bookRepository.update(Object.assign(data, { date: today }), id)
    }

    async delete(id: string): Promise<boolean | string> {
        return this.bookRepository.delete(id)
    }
}