import TodoCheckIndicator from "./TodoCheckIndicator";
const TodoInput = () => {
    return (
        <div className="flex flex-row h-[50px] w-full bg-dark-very-dark-grayish-blue rounded gap-1">
            <TodoCheckIndicator isChecked={false} />
            <div className="show-border text-left flex-grow py-3 "> Currently Tyoing</div>
        </div>);
};

export default TodoInput;
