// import "./db"; // express보다 위에 있어야함
// import videoModel from "./models/video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// const PORT = 4000;

// console.log(process.cwd());

const app = express();
const logger = morgan("dev");

// Global Router
// const globalRouter = express.Router();

// req, res 무조건 요청(req))가 먼저
// const handleHome = (req, res) => {
//   return res.send("Home");
// };

// globalRouter.get("/", handleHome);

// const userRouter = express.Router();

// const handleEditUser = (req, res) => {
//   return res.send("Edit User");
// };

// userRouter.get("/edit", handleEditUser);

// const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => {
//   return res.send("Watch Video");
// };

// videoRouter.get("/watch", handleWatchVideo);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter); // "/" 경로는 globalRouter에서 처리
app.use("/users", userRouter); // "/users" 경로는 userRouter에서 처리
app.use("/videos", videoRouter); // "/video" 경로는 videoRouter에서 처리

// const handleListening = () =>
//   console.log(`⏳Server Listening on Port http://localhost:${PORT}⏳`);

// app.listen(4000, handleListening);

export default app;
