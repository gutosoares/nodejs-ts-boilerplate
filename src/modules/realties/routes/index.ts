import * as express from "express";

import { createRealty } from "./realties-post";
import { updateRealty } from "./realties-patch";
import { deleteRealty } from "./realties-del";
import { getAllRealties, getSingleRealty } from "./realties-get";

const RealtiesRoutes = express.Router();

RealtiesRoutes
  .get("/", getAllRealties)
  .get("/:id", getSingleRealty)
  .patch("/update/:id", updateRealty)
  .post("/", createRealty)
  .delete("/:id", deleteRealty);

export default RealtiesRoutes;
