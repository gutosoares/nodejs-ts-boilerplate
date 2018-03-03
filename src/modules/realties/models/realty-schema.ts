import * as mongoose from 'mongoose';
import realty from './realty-model';

const Schema = mongoose.Schema;

const config = new Schema(realty, { timestamps: true });

export const RealtySchema = mongoose.model('realties', config);
