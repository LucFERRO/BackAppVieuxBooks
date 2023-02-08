import { NextFunction, Request, Response } from 'express';
import { logger } from '../../winston.logger';
 
function unexpectedErrorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  const status = 500;
  const message = 'Something went wrong';
  logger.error(error)
  res
    .status(status)
    .send({
      status,
      message,
    })
}
 
export default unexpectedErrorMiddleware;