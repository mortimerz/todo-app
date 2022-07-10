import TodoStore from "../../../stores/TodoStore";

interface ITodoRemoveIndicator {
    todoStore: TodoStore,
    uuid: string,
}
const TodoRemoveIndicator: React.FC<ITodoRemoveIndicator> = ({todoStore, uuid}) => {
    return (
        <div className="py-3 px-3 w-[10%] flex justify-center items-center" onClick={() => {todoStore.removeTodoItem(uuid)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="hidden group-hover:block">
                <path 
                className="fill-#494C6B dark:fill-light-dark-grayish-blue"
                    fillRule="evenodd"
                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
            </svg>
        </div>
    );
}

export default TodoRemoveIndicator;