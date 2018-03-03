import { Request, Response } from 'express';
import { RealtySchema } from '../models/realty-schema';

export const updateRealty = async (req: Request, res: Response): Promise<any> => {
  try {
    const update = { $set: req.body };
    const options = { new: true };

    const realty = await RealtySchema.findByIdAndUpdate(req.params.id, update, options);
    res.status(200).json({
      status: 200,
      message: `Realty with id ${req.params.id} successfully updated!`,
      data: realty
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
};
