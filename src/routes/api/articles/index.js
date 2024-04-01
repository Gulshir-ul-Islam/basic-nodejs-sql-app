import { Router } from "express";

import { commentsRouter } from "./comments"

export const articlesRouter = Router();

articlesRouter.use("/comments", commentsRouter);