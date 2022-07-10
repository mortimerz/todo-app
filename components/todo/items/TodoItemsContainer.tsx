import { observer } from "mobx-react";
import TodoStore, { ITodoItem, TodoViewFilter } from "../../../stores/TodoStore";
import TodoItem from "./TodoItem";
import TodoOptionsContainer from "./TodoOptionsContainer";

interface ITodoItemsContainer {
  todoStore:TodoStore;
}

const TodoItemsContainer: React.FC<ITodoItemsContainer> = ({ todoStore }) => {
  return (
    <>
      <div className="
      overflow-y-auto
      items-center 
      flex 
      flex-col 
      rounded
      max-h-[80%]
      divide-y-[1px]
      shadow-xl
      dark:divide-dark-light-grayish-blue/[.20]
      divide-light-light-grayish-blue
      ">
        {todoStore.getFilteredView().map((todo: ITodoItem, index) => {
          return (
            <TodoItem key={index} todoStore={todoStore} {...todo}></TodoItem>
          )
        })}
      </div>
      {
        !!todoStore.todoItems.length ?
          <TodoOptionsContainer todoStore={todoStore} /> : ''
      }
    </>
  )
};

export default observer(TodoItemsContainer);
