import { TodoViewFilter } from "./TodoItemsContainer";

interface ITodoOptionsContainer {
    activeItems: number | undefined,
    setViewFilter: (filter: TodoViewFilter) => void,
    clearCompleted: () => void,
}

const TodoOptionsContainer: React.FC<ITodoOptionsContainer> = ({ activeItems, setViewFilter, clearCompleted }) => {
    return (
        <div className="todo-option-container">
            <div className="todo-option w-[20%] p-4">{`${!!activeItems ? activeItems : 0} items left`}</div>
            <div className="todo-option w-[57%]">
                <div className="flex flex-row justify-between w-[55%] font-bold">
                    <div className="todo-option-hover">
                        ALL
                    </div>
                    <div className="todo-option-hover">
                        Active
                    </div>
                    <div className="todo-option-hover">
                        Completed
                    </div>
                </div>
            </div>
            <div className="todo-option w-[22%] pr-2 font-bold todo-option-hover">Clear Completed</div>
        </div>
    )
}

export default TodoOptionsContainer;