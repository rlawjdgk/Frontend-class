import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

// const handleEditUser = (req, res) => {
//   return res.send("Edit User");
// };
// const handleDeleteUser = (req, res) => {
//   return res.send("Delete User");
// };

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;
