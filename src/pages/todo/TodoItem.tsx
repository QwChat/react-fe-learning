import * as React from "react"
import { observer } from "mobx-react"
import { TodoItem } from "../../services/todo"

interface ITodoItemProps {
    item: TodoItem
    onChange: (status: boolean, item: TodoItem) => void
    delete: (id: string) => void
}

@observer
export class TItem extends React.Component<ITodoItemProps, {}> {
    public render(): JSX.Element {
        const { name, complete, id } = this.props.item
        return (
            <div>
                <input type="checkbox" checked={complete} onChange={this.onChange} />
                <span>{name}</span>
                <span
                    style={{
                        display: "inline-block"
                    }}
                    onClick={() => this.props.delete.bind(id)}
                >
                    delete
                </span>
            </div>
        )
    }

    private onChange() {
        const { complete } = this.props.item

        this.props.onChange(!complete, this.props.item)
    }
}

export default TItem
