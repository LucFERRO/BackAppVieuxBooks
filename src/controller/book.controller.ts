const { Router } = require('express')

import { bookHandler } from "../core/initialisation";

export const bookController = Router();

/**
 * @swagger
 * tags:
 *      name: Books
 *      description: Manage books
 */

/**
 * @openapi
 * /api/books:
 *   get:
 *      tags: [Books]
 *      description: Get list of books
 *      responses:
 *        200:
 *          description: Get all.
 */
bookController.get('/', bookHandler.getBooks)

/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *      tags: [Books]
 *      description: Get book by id.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 63e4f22ac5c550de4aac8f57
 *      responses:
 *        200:
 *          description: Get by id.
 */
bookController.get('/:id', bookHandler.getBookById)

/**
 * @openapi
 * /api/books:
 *   post:
 *      tags: [Books]
 *      description: Create a new book.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "name": "TestCreate", "author": "Gaetan le Createur Fou", "spot_id": '63e4ed537d91ea19bcc06259'}
 *      responses:
 *        200:
 *          description: Create.
 */
bookController.post('/', bookHandler.createBook)


/**
 * @openapi
 * /api/books/{id}:
 *  put:
 *      tags: [Books]
 *      description: Update a book.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 63e4f22ac5c550de4aac8f57
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "name": "TestUpdate", "author": "Gaetan le Createur Fou", "user_id": null, "spot_id": '63e4ed537d91ea19bcc06259'}
 *      responses:
 *        200:
 *          description: Update.
 */
bookController.put('/:id', bookHandler.updateBook)

/**
 * @openapi
 * /api/books/{id}:
 *  delete:
 *      tags: [Books]
 *      description: Delete a book
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 63e4f22ac5c550de4aac8f57
 *      responses:
 *        200:
 *          description: Delete.
 */
bookController.delete('/:id', bookHandler.deleteBook)