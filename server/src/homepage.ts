import { Express, Response, Request } from "express"

const { data: { 2017080800: homepageData } } = require("../json/tmall_homepage.json")

function ShowCase(_: Request, res: Response) {
    const navs = homepageData.data.cards[0].items.map((ele) => ({
        name: ele.title,
        image: ele.imgUrl,
        url: "#"
    }))
    const banners = homepageData.data.cards[1].items[0].items.map((ele) => ({
        title: ele.activity,
        image: ele.imgUrl,
        url: "#"
    }))
    const products = homepageData.data.cards[10].items.map((ele) => ({
        title: ele.title,
        url: ele.subAction,
        price: ele.price,
        shopName: ele.shopName,
        brandName: ele.brandTitle,
        image: ele.imgUrl,
        sellerId: ele.sellerId
    }))

    res.json({
        navs,
        banners,
        products
    })
}

export const homepageRoute = (app: Express) => {
    console.log("register route hompage")

    app.post("/homepage.Homepage/showcase", ShowCase)
}
