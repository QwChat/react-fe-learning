import * as React from "react"
import { hot } from "react-hot-loader"
import styles from "./index.scss"

import { Showcase, Nav, Banner, ProductItem } from "../../services/homepage"

import { Header } from "./Header"
import { Navs } from "./Navs"
import { Banners } from "./Banners"
import { Products } from "./Products"

interface IIndexState {
    navs: Nav[]
    banners: Banner[]
    products: ProductItem[]
}

class Index extends React.Component<{}, IIndexState> {
    constructor(props) {
        super(props)
        this.state = {
            navs: [],
            banners: [],
            products: []
        }
    }

    public render(): JSX.Element {
        return (
            <div className={styles.wrapper}>
                <Header />
                <Navs navs={this.state.navs} />
                <Banners banners={this.state.banners} />
                <Products products={this.state.products} />
            </div>
        )
    }

    public componentDidMount() {
        Showcase({}).then((data) => {
            if (data) {
                this.setState({
                    navs: data.navs,
                    banners: data.banners,
                    products: data.products
                })
            }
        })
    }
}

export default hot(module)(Index)
