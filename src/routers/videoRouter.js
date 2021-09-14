import express from "express";
import {
  upload,
  watch,
  getEdit,
  postEdit,
  deleteVideo,
} from "../controllers/videoControllers.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
