import TodoCheckIndicator from "./TodoCheckIndicator";
import TodoInputField from "./TodoInputField";
const TodoInputContainer = () => {

    const handleAddTodoItem = (todo: string) => {
        console.log(todo);
    }

    return (
        <div className="todo-input-container">
            <TodoCheckIndicator isChecked={false} />
            <TodoInputField addTodoItem={handleAddTodoItem} />
        </div>);
};

export default TodoInputContainer;
