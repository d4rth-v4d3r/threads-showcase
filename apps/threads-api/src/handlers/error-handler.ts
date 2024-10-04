/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundError } from '@threads/core';
import e from 'express';

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
