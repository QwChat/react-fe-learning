import * as React from "react"

import { Nav } from "./../../../services/homepage"

import styles from "./index.scss"

interface NavsProps {
    navs: Nav[]
}

interface NavsState {}

export class Navs extends React.Component<NavsProps, NavsState> {
    public render(): JSX.Element {
        return (
            <div className={styles.navs}>
                {this.props.navs.map((nav, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <div>
                                <img src={nav.image} alt="" />
                            </div>
                            <div className={styles.name}>{nav.name}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
