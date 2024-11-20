import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const morganMiddleWare = morgan("dev");
app.use(morganMiddleWare);

// Global Router
const globalRouter = express.Router();

// req, res 무조건 요청(req))가 먼저
const handleHome = (req, res) => {
  return res.send("Home");
};

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => {
  return res.send("Edit User");
};

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
  return res.send("Watch Video");
};

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter); // "/" 경로는 globalRouter에서 처리
app.use("/users", userRouter); // "/users" 경로는 userRouter에서 처리
app.use("/video", videoRouter); // "/video" 경로는 videoRouter에서 처리

const handleListening = () =>
  console.log(`⏳Server Listening on Port http://localhost:${PORT}⏳`);

app.listen(4000, handleListening);
