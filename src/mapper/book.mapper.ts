import { BookDTO } from "../dto/book.dto"; 
import { Book } from "../database/models"; 

export class BookMapper {
    static mapToDto(book: BookDTO | null): BookDTO {
        if (book === null) return null as any;
        return {
            _id : book._id,
            name: book.name, 
            author: book.author,
            state: book.state,
            spot_id: book.spot_id,
            createdAt: book.createdAt
        }
    }
}