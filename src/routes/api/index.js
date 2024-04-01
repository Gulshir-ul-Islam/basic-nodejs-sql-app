import { Router } from "express";

import { usersRouter } from "./users";
import { userRouter } from "./user";
import { tagsRouter } from "./tags";
import { profilesRouter } from "./profiles";
import { articlesRouter } from "./articles/index";

export const apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/tags", tagsRouter);
apiRouter.use("/articles", articlesRouter);
apiRouter.use("/profiles", profilesRouter);