"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const realty_schema_1 = require("../models/realty-schema");
exports.getAllRealties = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { limit, offset } = req.query;
        const realties = yield realty_schema_1.RealtySchema.find().skip(offset).limit(limit);
        res.status(200).json({
            status: 200,
            message: 'Realties successfully loaded',
            data: realties
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
});
exports.getSingleRealty = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const realty = yield realty_schema_1.RealtySchema.findOne({ _id: id });
        if (realty) {
            res.status(200).json({
                status: 200,
                message: 'Realty successfully loaded',
                data: realty
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: 'No realty found with the given id'
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
});
