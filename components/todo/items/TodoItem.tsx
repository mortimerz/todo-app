import { useState } from "react";
import TodoCheckIndicator from "../input/TodoCheckIndicator";
import TodoInputField from "../input/TodoInputField";

export enum TodoState {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
export interface ITodoItem {
  isChecked: boolean;
  title: string;
  state: TodoState;
}

const TodoItem: React.FC<ITodoItem> = ({ isChecked, title, state = TodoState.ACTIVE }) => {
  const [checked, setChecked] = useState(isChecked);
  return (
    <div className="todo-item">
      <TodoCheckIndicator checked={checked} setChecked={setChecked} />
    </div>);
};

export default TodoItem;
