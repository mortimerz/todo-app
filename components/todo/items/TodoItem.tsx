
import { observer } from "mobx-react";
import { useState } from "react";
import TodoStore, { ITodoItem, TodoState } from "../../../stores/TodoStore";
import TodoCheckIndicator from "../input/TodoCheckIndicator";
import TodoRemoveIndicator from "../input/TodoRemoveIndicator";

interface ITodoItemComponent extends ITodoItem {
  todoStore: TodoStore;
}

const TodoItem: React.FC<ITodoItemComponent> = ({ description, state = TodoState.ACTIVE, uuid, todoStore }) => {
  return (
    <div className="todo-item select-none group" >
      {/* check indicator */}
      <TodoCheckIndicator checked={state === TodoState.COMPLETED} setChecked={() => todoStore.toggleTodoItemCheckState(uuid)} />
      {/* description */}
      <div className="px-3 py-3 w-[80%]">
        {state === TodoState.COMPLETED ?
          <div className="todo-item-description dark:text-dark-dark-grayish-blue text-light-light-grayish-blue line-through">
            {description}
          </div> :
          <div className="todo-item-description text-light-dark-grayish-blue dark:text-dark-light-grayish-blue">
            {description}
          </div>
        }
      </div>
      <TodoRemoveIndicator todoStore={todoStore} uuid={uuid} />

    </div>);
};

export default observer(TodoItem);
