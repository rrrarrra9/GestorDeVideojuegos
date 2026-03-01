import { searchGameController, gameDetailsController, importGameController } from "../controllers/rawg.controller";
import { Router } from "express";

const rawgRouter = Router()

rawgRouter.get("/search", searchGameController)
rawgRouter.get("/:id", gameDetailsController)
rawgRouter.post("/:id", importGameController)


export default rawgRouter

