
import { useState } from "react";
import { ITodoItem, TodoState } from "../../../stores/TodoStore";
import TodoCheckIndicator from "../input/TodoCheckIndicator";

const TodoItem: React.FC<ITodoItem> = ({ description, state = TodoState.ACTIVE }) => {
  const [checked, setChecked] = useState(state === TodoState.COMPLETED);
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
