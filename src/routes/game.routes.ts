import { Router } from "express";
import {
    getAllGamesController,
    getGameByIdController,
    createGameController,
    updateGameController,
    deleteGameController
} from "../controllers/game.controller";

const router = Router();

router.get("/", getAllGamesController)
router.get("/:id", getGameByIdController)
router.post("/", createGameController)
router.put("/:id", updateGameController)
router.delete("/:id", deleteGameController)

export default router;