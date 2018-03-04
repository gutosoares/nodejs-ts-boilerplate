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
exports.createRealty = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const realties = yield new realty_schema_1.RealtySchema(req.body).save();
        res.status(201).json({
            status: 201,
            message: 'Realty successfully created!'
        });
    }
    catch (error) {
        return res.status(400).json((error.message, 400));
    }
});
