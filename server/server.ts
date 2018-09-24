import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import { homepageRoute } from "./src/homepage"
import { categoryRoute } from "./src/category"

const app = express()

app.use(bodyParser.json())

const whitelist = [ "0.0.0.0", "localhost", "127.0.0.1" ]
const corsOptions = {
    origin(origin, callback) {
        if (whitelist.some((ele) => origin.indexOf(ele) !== -1)) {
            callback(null, true)
        } else {
            callback(new Error(origin + "Not allowed by CORS"), false)
        }
    }
}

app.options("*", cors(corsOptions))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get("/", (_, res, next) => {
    res.send("this is server homepage")
})

homepageRoute(app)

categoryRoute(app)

app.listen(3001)

console.log("Run server 3001")
