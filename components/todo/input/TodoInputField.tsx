import { useState } from "react";

interface ITodoInputField {
    addTodoItem: (input: string) => void
}
const TodoInputField: React.FC<ITodoInputField> = ({ addTodoItem }) => {
    const [value, setValue] = useState("")

    const handleKeyDown = (key: string) => {
        if (!!value && key === "Enter") {
            addTodoItem(value);
            setValue("");
        }
    }

    return (
        <input
            className="todo-input-field"
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
            placeholder="Type a Todo Item"
            onKeyDown={(e) => { handleKeyDown(e.key) }}
        />
    );
}
export default TodoInputField;