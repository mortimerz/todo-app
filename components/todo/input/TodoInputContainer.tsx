import { useState } from "react";
import TodoStore, { TodoState } from "../../../stores/TodoStore";
import TodoCheckIndicator from "./TodoCheckIndicator";
import TodoInputField from "./TodoInputField";

interface ITodoInputContainer {
    todoStore:TodoStore;
}

const TodoInputContainer: React.FC<ITodoInputContainer>  = ({todoStore}) => {
    const [checked, setChecked] = useState(false);

    const addTodoItem = (input: string) => {
        const state = checked ? TodoState.COMPLETED : TodoState.ACTIVE;
        todoStore.addTodoItem(input, state);
        setChecked(false)
    }

    return (
        <div className="todo-input-container">
            <TodoCheckIndicator checked={checked} setChecked={setChecked}/>
            <TodoInputField addTodoItem={addTodoItem} />
        </div>);
};

export default TodoInputContainer;
