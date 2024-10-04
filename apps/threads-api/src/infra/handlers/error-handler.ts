/* eslint-disable @typescript-eslint/no-unused-vars */
import e from 'express';
import { NotFoundError } from '../../domain/errors/not-found-error';

export const errorHandler: e.ErrorRequestHandler = (
  err,
  _,
  res,
  __,
) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};
