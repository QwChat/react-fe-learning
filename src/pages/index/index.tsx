import * as React from "react"
import { hot } from "react-hot-loader"
import styles from "./index.scss"

import { showcase, Nav, Banner } from "../../services/homepage"

import { Header } from "./Header"
import { Navs } from "./Navs"
import { Banners } from "./Banners"

interface IIndexState {
    navs: Nav[]
    banners: Banner[]
}

class Index extends React.Component<{}, IIndexState> {
    constructor(props) {
        super(props)
        this.state = {
            navs: [],
            banners: []
        }
    }

    public render(): JSX.Element {
        return (
            <div className={styles.wrapper}>
                <Header />
                <Navs navs={this.state.navs} />
                <Banners banners={this.state.banners} />
            </div>
        )
    }

    public componentDidMount() {
        showcase({}).then((data) => {
            if (data) {
                this.setState({
                    navs: data.navs,
                    banners: data.banners
                })
            }
        })
    }
}

export default hot(module)(Index)
