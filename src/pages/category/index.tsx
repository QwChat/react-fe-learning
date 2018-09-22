import * as React from "react"
import { hot } from "react-hot-loader"

import styles from "./index.scss"

interface CategoryProps {}

interface CategoryState {}

class Category extends React.Component<CategoryProps, CategoryState> {
    public render(): JSX.Element {
        return <span className={styles.wrapper}>Category</span>
    }
}

export default hot(module)(Category)
