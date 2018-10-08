import { TodoItem, List } from "./../../services/todo"
import { observable, computed, action } from "mobx"
import { IsErrorResponse } from "../../webapi"
import { Uid } from "../../utils/uid"

export class TodoStore {
    @observable
    public list: TodoItem[] = [
        {
            id: "1111",
            name: "wesley test it",
            complete: false
        }
    ]

    @computed
    public get completeCount(): number {
        return this.list.map((ele) => ele.complete).length
    }

    @action.bound
    public toggleComplete(status: boolean, item: TodoItem) {
        const findItem = this.list.find((ele) => ele.id === item.id)
        if (findItem) {
            findItem.complete = status
        }
    }

    @action.bound
    public getTodo() {
        List({ uid: 0 }).then((data) => {
            if (IsErrorResponse(data)) {
                return
            }

            this.list = data.list
        })
    }

    @action.bound
    public addTodo(name: string) {
        this.list.push({
            name,
            id: Uid(),
            complete: false
        })
    }

    @action.bound
    public deleteTodo(id: string) {

        console.log(id, this.list)

        this.list = this.list.filter((item) => item.id !== id)
    }
}
