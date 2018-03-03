import { Application } from 'express';

import RealtiesRoutes from './modules/realties/routes';

const urlBase = '/api/v1';

const allRoutes = (server: Application) => {
  server.use(`${urlBase}/realties`, RealtiesRoutes);

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

export default allRoutes;
