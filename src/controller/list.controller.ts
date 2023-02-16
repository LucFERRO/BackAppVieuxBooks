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
 *      description: Login.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "name": "Gaetan", "code": "43DZFDFR"}
 *      responses:
 *        200:
 *          description: login.
 */
listController.post('/', listHandler.login)