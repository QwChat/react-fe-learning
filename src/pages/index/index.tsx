import * as React from "react"
import { hot } from "react-hot-loader"
import styles from "./index.scss"

class Index extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className={styles.wrapper}>
                <span>react hot loader chenhuan</span>
            </div>
        )
    }
}

export default hot(module)(Index)
