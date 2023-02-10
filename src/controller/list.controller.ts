const { Router } = require('express')

import { listHandler } from "../core/initialisation";

export const listController = Router();

/**
 * @swagger
 * tags:
 *      name: List
 *      description: Manage registered users
 */

/**
 * @openapi
 * /api/list:
 *   get:
 *      tags: [List]
 *      description: Get list of users
 *      responses:
 *        200:
 *          description: Get all.
 */
listController.get('/', listHandler.getList)

/**
 * @openapi
 * /api/list:
 *   post:
 *      tags: [List]
 *      description: Is registered.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "code": "43DZFDFR"}
 *      responses:
 *        200:
 *          description: IsRegistered.
 */
listController.post('/', listHandler.isRegistered)