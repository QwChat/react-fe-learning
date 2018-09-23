import express from "express"
import bodyParser from "body-parser"

import { homepageRoute } from "./src/homepage"
import { categoryRoute } from "./src/category"

const app = express()

app.use(bodyParser.json())

app.get("/", (_, res, next) => {
    res.send("this is server homepage")
})

homepageRoute(app)

categoryRoute(app)

app.listen(3001)

console.log("Run server 3001")
