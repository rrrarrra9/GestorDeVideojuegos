import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express()
const port = process.env.PORT ?? 3000



app.get("/", (req, res) => {
    res.json({ status: "ok", message: "api de videojuegos" })
})


app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`);
})