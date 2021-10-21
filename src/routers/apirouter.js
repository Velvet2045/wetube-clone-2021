import express from "express";
import { registerView, createComment } from "../controllers/videoControllers";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-z]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-z]{24})/comment", createComment);

export default apiRouter;
