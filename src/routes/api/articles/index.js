import { Router } from "express";

import { commentsRouter } from "./comments.js"

export const articlesRouter = Router();

articlesRouter.use("/comments", commentsRouter);