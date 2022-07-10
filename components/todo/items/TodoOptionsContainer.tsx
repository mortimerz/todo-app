import { TodoViewFilter } from "./TodoItemsContainer";

interface ITodoOptionsContainer {
    activeItems: number | undefined,
    viewFilter: TodoViewFilter,
    setViewFilter: (filter: TodoViewFilter) => void,
    clearCompleted: () => void,
}

const TodoOptionsContainer: React.FC<ITodoOptionsContainer> = ({ activeItems, viewFilter, setViewFilter, clearCompleted }) => {
    return (
        <div className="todo-option-container">
            <div className="todo-option w-[20%] p-4">{`${!!activeItems ? activeItems : 0} items left`}</div>
            <div className="todo-option w-[57%]">
                <div className="flex flex-row justify-between w-[55%] font-bold">
                    <div
                        className={`${viewFilter === TodoViewFilter.ALL ? 'todo-option-selected' : 'todo-option-hover'}`}
                        onClick={() => setViewFilter(TodoViewFilter.ALL)}
                    >
                        ALL
                    </div>
                    <div className={`${viewFilter === TodoViewFilter.ACTIVE ? 'todo-option-selected' : 'todo-option-hover'}`}
                        onClick={() => setViewFilter(TodoViewFilter.ACTIVE)}
                    >
                        Active
                    </div>
                    <div className={`${viewFilter === TodoViewFilter.COMPLETED ? 'todo-option-selected' : 'todo-option-hover'}`}
                        onClick={() => setViewFilter(TodoViewFilter.COMPLETED)}
                    >
                        Completed
                    </div>
                </div>
            </div>
            <div className="todo-option w-[22%] pr-2 font-bold todo-option-hover">Clear Completed</div>
        </div>
    )
}

export default TodoOptionsContainer;