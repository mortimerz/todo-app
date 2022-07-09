import { useState } from "react";
import TodoCheckIndicator from "../input/TodoCheckIndicator";

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
      <span className="px-3 py-3  dark:text-dark-light-grayish-blue">{title}</span>
    </div>);
};

export default TodoItem;
