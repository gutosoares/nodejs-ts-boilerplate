"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const realties_post_1 = require("./realties-post");
const realties_patch_1 = require("./realties-patch");
const realties_del_1 = require("./realties-del");
const realties_get_1 = require("./realties-get");
const RealtiesRoutes = express.Router();
RealtiesRoutes
    .get('/', realties_get_1.getAllRealties)
    .get('/:id', realties_get_1.getSingleRealty)
    .patch('/update/:id', realties_patch_1.updateRealty)
    .post('/', realties_post_1.createRealty)
    .delete('/:id', realties_del_1.deleteRealty);
exports.default = RealtiesRoutes;
