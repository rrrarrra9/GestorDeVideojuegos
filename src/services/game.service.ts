import prisma from "../config/prisma";
import { Format } from "../generated/prisma/enums";

export async function getAllGames() {
    return await prisma.game.findMany()

}

export async function getGameById(id: number) {
    return await prisma.game.findUnique({
        where: { id }
    })

}


export async function createGame(
    data: {
        rawgId: number,
        name: string,
        released: Date,
        rating: number,
        backgroundImage: string,
        description: string,
        platforms: string[],
        genres: string[],
        played: boolean,
        format: Format
    }
) {
    return await prisma.game.create({
        data
    })


}



export async function updateGame(
    id: number,
    data: {
        rawgId?: number,
        name?: string,
        released?: Date,
        rating?: number,
        backgroundImage?: string,
        description?: string,
        platforms?: string[],
        genres?: string[],
        played?: boolean,
        format?: Format
    }

) {
    return await prisma.game.update({ where: { id }, data })

}

export async function deleteGame(id: number) {
    return await prisma.game.delete({
        where: { id }
    })

}