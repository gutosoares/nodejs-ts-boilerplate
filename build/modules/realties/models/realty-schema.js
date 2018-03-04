"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const realty_model_1 = require("./realty-model");
const Schema = mongoose.Schema;
const config = new Schema(realty_model_1.default, { timestamps: true });
exports.RealtySchema = mongoose.model('realties', config);
