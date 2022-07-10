import { useState } from "react";
import TodoCheckIndicator from "./TodoCheckIndicator";
import TodoInputField from "./TodoInputField";

interface ITodoInputContainer {
    handleAddTodoItem: (isChecked: boolean, description: string) => void
}

const TodoInputContainer: React.FC<ITodoInputContainer>  = ({ handleAddTodoItem }) => {
    const [checked, setChecked] = useState(false);

    const addTodoItem = (input: string) => {
        handleAddTodoItem(checked, input);
        setChecked(false)
    }

    return (
        <div className="todo-input-container">
            <TodoCheckIndicator checked={checked} setChecked={setChecked}/>
            <TodoInputField addTodoItem={addTodoItem} />
        </div>);
};

export default TodoInputContainer;
