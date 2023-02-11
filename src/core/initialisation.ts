
import { BookHandler } from "../handler/book.handler";
import { BookService } from "../service/book.service";
import { BookRepository } from "../repository/book.repository";

import { ListHandler } from "../handler/list.handler";
import { ListService } from "../service/list.service";

export const bookHandler = new BookHandler(new BookService(new BookRepository))
export const listHandler = new ListHandler(new ListService)
