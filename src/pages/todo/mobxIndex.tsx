import * as React from "react"
import { hot } from "react-hot-loader"
import { observer } from "mobx-react"
import TodoItem from "./TodoItem"
import { TodoStore } from "./todo.mobx"
import styles from "./index.scss"

const store = new TodoStore()

interface ITodoProps {
    store: TodoStore
}

@observer
class Todo extends React.Component<ITodoProps, {}> {
    private AddInput: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()

    public render(): JSX.Element {
        const { list, toggleComplete, completeCount } = this.props.store

        return (
            <div className={styles.wrapper}>
                <input ref={this.AddInput} type="text" placeholder="add new todo" />
                <button onClick={this.addNew}>add new</button>
                {list.map((item) => {
                    return <TodoItem key={item.id} delete={this.delete} item={item} onChange={toggleComplete} />
                })}
                completeCount: {completeCount}
            </div>
        )
    }

    private addNew = () => {
        if (!this.AddInput.current) {
            return
        }

        this.props.store.addTodo(this.AddInput.current.value)
    }

    private delete = (id: string) => {
        this.props.store.deleteTodo(id)
    }
}

export default hot(module)(() => <Todo store={store} />)
