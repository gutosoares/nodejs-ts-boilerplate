import { Request, Response, NextFunction } from 'express';
import { RealtySchema } from '../models/realty-schema'

export const deleteRealty = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params;
    const realty = await RealtySchema.findByIdAndRemove({ _id: id });

    res.status(200).json({
      status: 200,
      message: "Realty successfully deleted!",
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
