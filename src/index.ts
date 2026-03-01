import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/game.routes";
import rawgRouter from "./routes/rawg.routes"
const app = express()
app.use(express.json())
app.use("/games", router)
app.use("/rawg", rawgRouter)

const port = process.env.PORT ?? 3000

app.get("/", (req, res) => {
    res.json({ status: "ok", message: "api de videojuegos" })
})

app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`);

})
