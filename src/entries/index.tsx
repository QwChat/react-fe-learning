import * as React from "react"
import * as ReactDOM from "react-dom"
import { hot } from "react-hot-loader"
import { Login, Register } from "./../services/user"

Register({
    nickname: "chenhuan",
    password: "123456"
})

Login({
    nickname: "chenhuan",
    password: "123456"
})

interface IndexProps {}

interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
    public render(): JSX.Element {
        return <span>Index test</span>
    }
}

const App = hot(module)(Index)

ReactDOM.render(<App />, document.getElementById("reactApp"))
