import { searchGame, gameDetails, importGame } from "../services/rawg.service";
import { Request, Response } from "express";

export async function searchGameController(req: Request, res: Response) {
    const query = String(req.query.query)
    try {
        const games = await searchGame(query)
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json({ error: "external server error" })


    }

}

export async function gameDetailsController(req: Request, res: Response) {
    const id = Number(req.params.id)
    try {
        const game = await gameDetails(id)
        res.status(200).json(game)
    } catch (error) {
        res.status(500).json({ error: "external server error" })


    }
}

export async function importGameController(req: Request, res: Response) {
    const id = Number(req.params.id)
    try {
        const game = await importGame(id)
        res.status(201).json(game)
    } catch (error) {
        res.status(500).json({ error: "external server error" })


    }

}