import { IRepository } from "../core/respository.interface"
import { Book } from "../database/models"
import { BookDTO } from "../dto/book.dto"
import { BookMapper } from "../mapper/book.mapper"

export class BookRepository implements IRepository<BookDTO> {
    async findById(id: string): Promise<BookDTO | null> {
        return Book.findById(id).then((book: any) => BookMapper.mapToDto(book))
    }

    async findAll(): Promise<BookDTO[]> {
        return Book.find({}).then((books: any[]) => books.map((book: any) => BookMapper.mapToDto(book)))
    }

    async create(data: BookDTO): Promise<any> {
        const newBook = new Book(data)
        await newBook.save()   
        return newBook.toJSON()
    }

    async update(data: BookDTO, id: string): Promise<any | string> {
        return Book.updateOne({ _id: id }, data)
    }

    async delete(id: string): Promise<any> {
        return Book.deleteOne({ _id: id })
    }
}