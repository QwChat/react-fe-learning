import express from "express"

import { tmallRoute } from "./src/tmallRoute"

const app = express()

app.get("/", (req, res, next) => {
    res.send("this is server homepage")
    next()
})

tmallRoute(app)

app.listen(3001)

console.log("Run server 3001")
