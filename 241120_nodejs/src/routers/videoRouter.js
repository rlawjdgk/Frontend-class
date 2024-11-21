import express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoConrtoller";

const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => {
//   return res.send("Watch Video");
// };

// const handleEdit = (req, res) => {
//   return res.send("Edit Video");
// };

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
