import { Router } from "express";

import { usersRouter } from "./users.js";
import { userRouter } from "./user.js";
import { tagsRouter } from "./tags.js";
import { profilesRouter } from "./profiles.js";
import { articlesRouter } from "./articles/index.js";

export const apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/tags", tagsRouter);
apiRouter.use("/articles", articlesRouter);
apiRouter.use("/profiles", profilesRouter);