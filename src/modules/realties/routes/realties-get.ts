import { Request, Response } from 'express';
import { RealtySchema } from '../models/realty-schema';

export const getAllRealties = async (req: Request, res: Response): Promise<any> => {
  try {
    const { limit, offset } = req.query;
    const realties = await RealtySchema.find().skip(offset).limit(limit);

    res.status(200).json({
      status: 200,
      message: 'Realties successfully loaded',
      data: realties
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
};

export const getSingleRealty = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const realty = await RealtySchema.findOne({ _id: id });

    if (realty) {
      res.status(200).json({
        status: 200,
        message: 'Realty successfully loaded',
        data: realty
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'No realty found with the given id'
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
};