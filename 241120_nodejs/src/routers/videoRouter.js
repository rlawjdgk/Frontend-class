import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUplold,
  postUplold,
  deleteVideo,
} from "../controllers/videoConrtoller";

const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => {
//   return res.send("Watch Video");
// };

// const handleEdit = (req, res) => {
//   return res.send("Edit Video");
// };

videoRouter.route("/upload").get(getUplold).post(postUplold);
videoRouter.route("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
