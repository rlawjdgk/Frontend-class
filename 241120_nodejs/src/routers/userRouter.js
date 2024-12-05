import express from "express";
import {
  check,
  logout,
  triggerGithubLogin,
  callbackGithub,
  getEdit,
  postEdit,
} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middlewares";

//User Router
const userRouter = express.Router();
userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, triggerGithubLogin);
userRouter.get("/github/callback", publicOnlyMiddleware, callbackGithub);
userRouter.get("/:id", publicOnlyMiddleware, check);

export default userRouter;
