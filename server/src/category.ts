import { Express, Response, Request } from "express"

const categoryMock = require("../json/tmall_category.json")

function CategoryList(req: Request, res: Response) {
    const params = req.body
    let data = categoryMock

    if (params && params.sideId) {
        console.log(params.sideId)
        data = require(`../json/tmall_category_${params.sideId}.json`)
    }

    const sideItems = !data.data.sideBlock.list
        ? []
        : data.data.sideBlock.list.map((side) => ({
              id: side.id,
              name: side.name
          }))

    const sectionCategoryList = data.data.mainBlock.models.map((model) => {
        return {
            id: model.id,
            type: model.type,
            name: model.name,
            categories: model.list.map(({ name, id, pic, url }) => ({
                id,
                name: name || "",
                image: pic,
                url
            }))
        }
    })

    res.send(
        JSON.stringify({
            sideItems,
            sectionCategoryList
        })
    )
}

export const categoryRoute = (app: Express) => {
    console.log("register route category")

    app.post("/category.Category/CategoryList", CategoryList)
}
