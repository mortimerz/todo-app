import { observer } from "mobx-react-lite";
import TodoStore, { TodoState, TodoViewFilter } from "../../../stores/TodoStore";
interface ITodoOptionsContainer {
    todoStore:TodoStore;
}

const TodoOptionsContainer: React.FC<ITodoOptionsContainer> = ({todoStore}) => {
    const activeItems = todoStore.todoItems.filter(todo => todo.state === TodoState.ACTIVE).length;
    const viewFilter = todoStore.viewFilter;
    return (
        <div className="todo-option-container">
            <div className="todo-option w-[20%]">{`${!!activeItems ? activeItems : 0} items left`}</div>
            <div className="todo-option w-[57%]">
                <div className="flex flex-row justify-between w-[55%] font-bold">
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
            <div className="todo-option w-[22%] pr-2 font-bold todo-option-hover" onClick={todoStore.clearCompletedTodoItems}>Clear Completed</div>
        </div>
    )
}

export default observer(TodoOptionsContainer);