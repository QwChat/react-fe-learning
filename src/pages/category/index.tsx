import * as React from "react"
import { hot } from "react-hot-loader"

import styles from "./index.scss"

interface ICategoryProps {}

interface ICategoryState {}

class Category extends React.Component<ICategoryProps, ICategoryState> {
    public render(): JSX.Element {
        return <span className={styles.wrapper}>test Category</span>
    }
}

export default hot(module)(Category)
