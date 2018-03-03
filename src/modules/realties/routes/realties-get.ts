import { Request, Response, NextFunction } from 'express';
import { RealtySchema } from '../models/realty-schema';

export const getAllRealties = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { limit, offset } = req.query;
    const realties = await RealtySchema.find().skip(offset).limit(limit);

    res.status(200).json({
      status: 200,
      message: 'Realties successfully loaded!',
      data: realties
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  next();
};

export const getSingleRealty = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params;
    const realty = await RealtySchema.findOne({ _id: id });

    res.status(200).json({
      status: 200,
      message: 'Realty successfully loaded!',
      data: realty
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  next();
};