import { createGame } from "./game.service";
import { Format } from "../generated/prisma/enums"
const api = process.env.RAWG_API_KEY

export async function searchGame(query: string) {
    const search = await fetch(`https://api.rawg.io/api/games?search=${query}&key=${api}`)
    return await search.json()


}

export async function gameDetails(rawgid: number) {
    const search = await fetch(`https://api.rawg.io/api/games/${rawgid}?key=${api}`)
    return await search.json()
}

export async function importGame(rawgid: number) {
    const rawgdata: any = await gameDetails(rawgid)
    const gameData = {
        rawgId: rawgdata.id,
        name: rawgdata.name,
        released: new Date(rawgdata.released),
        rating: rawgdata.rating,
        backgroundImage: rawgdata.background_image,
        description: rawgdata.description_raw ?? "",
        platforms: rawgdata.platforms.map((p: any) => p.platform.name),
        genres: rawgdata.genres.map((g: any) => g.name),
        played: false,
        format: Format.WISHLIST
    }

    return await createGame(gameData)




}