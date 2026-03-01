import { getAllGames, getGameById, createGame, updateGame, deleteGame } from "../services/game.service";
import { Request, Response } from "express";

export async function getAllGamesController(req: Request, res: Response) {

    try {
        const games = await getAllGames()
        res.json(games)

    } catch (error) {
        res.status(500).json({ error: "internal server error" })

    }

}


export async function getGameByIdController(req: Request, res: Response) {
    const id = Number(req.params.id)
    try {
        const games = await getGameById(id)
        if (games != null) {
            res.status(200).json(games)
        } else {
            res.status(404).json({ error: "this game not exists" })
        }


    } catch (error) {
        res.status(500).json({ error: "internal server error" })


    }

}

export async function createGameController(req: Request, res: Response) {

    const data = req.body
    try {
        const game = await createGame(data)
        res.status(201).json(game)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }

}

export async function updateGameController(req: Request, res: Response) {
    const id = Number(req.params.id)
    const data = req.body
    try {
        const game = await updateGame(id, data)
        res.status(200).json(game)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }


}

export async function deleteGameController(req: Request, res: Response) {
    const id = Number(req.params.id)
    try {
        const game = await deleteGame(id)
        res.status(200).json(game)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })

    }
}