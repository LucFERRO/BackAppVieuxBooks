import { BookDTO } from "../dto/book.dto"; 
import { Book } from "../database/models"; 

export class BookMapper {
    static mapToDto(book: BookDTO | null): BookDTO {
        if (book === null) return null as any;
        return {
            _id : book._id,
            name: book.name, 
            author: book.author,
            date: book.date,
            user_id: book.user_id,
            spot_id: book.spot_id,
            createdAt: book.createdAt
        }
    }
}