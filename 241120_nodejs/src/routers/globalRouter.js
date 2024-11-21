import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoConrtoller";

const globalRouter = express.Router();

// 이거 대신 userController, videoConrtoller 파일 대체
// const handleHome = (req, res) => {
//   return res.send("Home");
// };

// const handleJoin = (req, res) => {
//   return res.send("Join");
// };

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
