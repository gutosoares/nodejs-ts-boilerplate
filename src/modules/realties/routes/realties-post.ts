import { Request, Response } from 'express';
import { RealtySchema } from '../models/realty-schema';

export const createRealty = async (req: Request, res: Response): Promise<any> => {
  try {
    const realties = await new RealtySchema(req.body).save();

    res.status(201).json({
      status: 201,
      message: 'Realty successfully created!'
    });
  } catch (error) {
    return res.status(400).json((error.message, 400));
  }
};
