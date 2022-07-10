import { useState } from "react";
import TodoCheckIndicator from "../input/TodoCheckIndicator";

export enum TodoState {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
export interface ITodoItem {
  isChecked: boolean;
  description: string;
  state: TodoState;
}

const TodoItem: React.FC<ITodoItem> = ({ isChecked, description, state = TodoState.ACTIVE }) => {
  const [checked, setChecked] = useState(isChecked);
  return (
    <div className="todo-item select-none" >
      {/* check indicator */}
      <TodoCheckIndicator checked={checked} setChecked={setChecked} />
      {/* description */}
      <div className="px-3 py-3">
      { checked ? 
        <div className="todo-item-description 
        dark:text-dark-dark-grayish-blue 
        text-light-light-grayish-blue
        line-through">
          {description}
        </div>  : 
        <div className="todo-item-description 
        text-light-dark-grayish-blue
        dark:text-dark-light-grayish-blue
        ">
        {description}
      </div>
        }
      </div>
      {/* remove */}
      <TodoCheckIndicator checked={checked} setChecked={setChecked} />
    </div>);
};

export default TodoItem;
