"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./modules/realties/routes");
const urlBase = '/api/v1';
const allRoutes = (server) => {
    server.use(`${urlBase}/realties`, routes_1.default);
    // Default route errorhandler
    server.use((req, res, next) => {
        res.status(500).json({
            status: 500,
            msg: `Error on route. This route exist?`,
            route: req.originalUrl
        });
        next();
    });
};
exports.default = allRoutes;
