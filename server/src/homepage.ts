import { Express, Response, Request } from "express"

const showcaseMock = require("../json/showcase.json")

function ShowCase(_: Request, res: Response) {
    res.send(JSON.stringify(showcaseMock))
}

export const homepageRoute = (app: Express) => {
    console.log("register route hompage")

    app.post("/homepage.Homepage/showcase", ShowCase)
}
