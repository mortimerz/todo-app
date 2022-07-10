import { observer } from "mobx-react-lite";
import TodoStore, { TodoState, TodoViewFilter } from "../../../stores/TodoStore";
interface ITodoOptionsContainerMobile {
    todoStore: TodoStore;
}

const TodoOptionsContainerMobile: React.FC<ITodoOptionsContainerMobile> = ({ todoStore }) => {
    const viewFilter = todoStore.viewFilter;
    return (
        <div className="todo-option-container sm:invisible visible rounded">
            <div className="todo-option w-[100%]">
                <div className="flex flex-row justify-between w-[80%] font-black">
                    <div
                        className={`${viewFilter === TodoViewFilter.ALL ? 'todo-option-selected' : 'todo-option-hover'}`}
                        onClick={() => todoStore.setViewFilter(TodoViewFilter.ALL)}
                    >
                        ALL
                    </div>
                    <div className={`${viewFilter === TodoViewFilter.ACTIVE ? 'todo-option-selected' : 'todo-option-hover'}`}
                        onClick={() => todoStore.setViewFilter(TodoViewFilter.ACTIVE)}
                    >
                        Active
                    </div>
                    <div className={`${viewFilter === TodoViewFilter.COMPLETED ? 'todo-option-selected' : 'todo-option-hover'}`}
                        onClick={() => todoStore.setViewFilter(TodoViewFilter.COMPLETED)}
                    >
                        Completed
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(TodoOptionsContainerMobile);