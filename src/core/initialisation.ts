import { BookHandler } from "../handler/book.handler";
import { BookService } from "../service/book.service";
import { BookRepository } from "../repository/book.repository";

import { SpotHandler } from "../handler/spot.handler";
import { SpotService } from "../service/spot.repository";
import { SpotRepository } from "../repository/spot.repository";

import { ListHandler } from "../handler/list.handler";
import { ListService } from "../service/list.service";

export const exportedBookRepository = new BookRepository
export const exportedSpotRepository = new SpotRepository


export const bookHandler = new BookHandler(new BookService(exportedBookRepository))
export const listHandler = new ListHandler(new ListService)
export const spotHandler = new SpotHandler(new SpotService(exportedSpotRepository))