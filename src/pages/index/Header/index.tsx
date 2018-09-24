import * as React from "react"
import styles from "./index.scss"

export class Header extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className={styles.header}>
                <div className={styles.head}>
                    <a className={styles.menu} href="#">
                        <img src={require("./icon.png")} alt="" />
                    </a>
                    <div className={styles.logo}>
                        <img src={require("./tmall.png")} alt="" />
                    </div>
                    <a href="">登录</a>
                </div>
                <div className={styles.headerSearch}>
                    <span className={styles.searchIcon}>
                        <img src={require("./search.png")} alt="" />
                    </span>
                    <input type="text" placeholder="搜索商品、品牌" />
                </div>
            </div>
        )
    }
}
