import { observer } from "mobx-react";
import TodoStore, { ITodoItem, TodoViewFilter } from "../../../stores/TodoStore";
import EmptyView from "./EmptyView";
import TodoItem from "./TodoItem";
import TodoOptionsContainer from "./TodoOptionsContainer";

interface ITodoItemsContainer {
  todoStore: TodoStore;
}

const TodoItemsContainer: React.FC<ITodoItemsContainer> = ({ todoStore }) => {
  return (
    <>
      {
        todoStore.getFilteredView().length > 0 ?
          (
            <div className="todo-items-container">
              {todoStore.getFilteredView().map((todo: ITodoItem, index) => {
                return (
                  <TodoItem key={index} todoStore={todoStore} {...todo}></TodoItem>
                )
              }
              )}
            </div>
          ) : (
            <EmptyView todoStore={todoStore} />
          )
      }
      <TodoOptionsContainer todoStore={todoStore} />
    </>
  )
};

export default observer(TodoItemsContainer);
