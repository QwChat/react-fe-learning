import { Express, Response, Request } from "express"
import request from "request"
import queryString from "querystring"

const config = {
    origin: "https://h5api.m.tmall.com/h5/"
}

function CategorySearch(req: Request, res: Response) {
    const data = {
        jsv: " 2.4.8",
        appKey: " 12574478",
        t: " 1537485129444",
        sign: " b614cffa8baa806b0c7a011c4327783a",
        api: " com.taobao.tmallsearch.service.TmallNavService",
        v: " 1.0",
        type: " jsonp",
        dataType: " jsonp",
        callback: " mtopjsonp1",
        data: { ver: 1, rootName: "main" }
    }

    console.log(req.body, queryString.stringify(data))

    request.get(`${config.origin}com.taobao.tmallsearch.service.tmallnavservice/1.0/?${queryString.stringify(data)}`,  (err, _, body) => {
        console.log("chen")

        console.log(body)

        if (err) {
            console.log(err)
            res.send(err)
            return err
        }

        console.log(body)

        res.send(body)
    })
}

export const tmallRoute = (app: Express) => {
    app.post("/category/search", CategorySearch)
}
