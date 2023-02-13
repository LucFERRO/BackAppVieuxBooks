const { Router } = require('express')

import { spotHandler } from "../core/initialisation";

export const spotController = Router();

/**
 * @swagger
 * tags:
 *      name: Spots
 *      description: Manage spots
 */

/**
 * @openapi
 * /api/spots:
 *   get:
 *      tags: [Spots]
 *      description: Get list of spots
 *      responses:
 *        200:
 *          description: Get all.
 */
spotController.get('/', spotHandler.getSpots)

/**
 * @openapi
 * /api/spots/{id}:
 *   get:
 *      tags: [Spots]
 *      description: Get spot by id.
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
spotController.get('/:id', spotHandler.getSpotById)

/**
 * @openapi
 * /api/spots:
 *   post:
 *      tags: [Spots]
 *      description: Create a new spot.
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
spotController.post('/', spotHandler.createSpot)


/**
 * @openapi
 * /api/spots/{id}:
 *  put:
 *      tags: [Spots]
 *      description: Update a spot.
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
spotController.put('/:id', spotHandler.updateSpot)

/**
 * @openapi
 * /api/spots/{id}:
 *  delete:
 *      tags: [Spots]
 *      description: Delete a spot
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
spotController.delete('/:id', spotHandler.deleteSpot)