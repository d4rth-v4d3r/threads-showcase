/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundError } from '@threads/core';
import express from 'express';

export const errorHandler: express.ErrorRequestHandler = (
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
