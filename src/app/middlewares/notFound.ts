import {  Request, Response } from "express";
import status from "http-status";
export const notFoundError = ( req:Request, res:Response, ) => {
  const message = "API not found";
  return res.status(status.NOT_FOUND).json({
    success: false,
    message,
    error:' '
  });
};