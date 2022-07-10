
import { useState } from "react";
import TodoItem, { ITodoItem, TodoState } from "./TodoItem";
import TodoOptionsContainer from "./TodoOptionsContainer";

interface ITodoItemsContainer {
  todoItems: ITodoItem[];
}

export enum TodoViewFilter {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}
const TodoItemsContainer: React.FC<ITodoItemsContainer> = ({ todoItems }) => {


  const [todos, setTodos] = useState(todoItems);
  const [viewFilter, setViewFilter] = useState(TodoViewFilter.ALL);


  const handleClearCompleted = () => {
    console.log('handleClearCompleted will be implemented');
  }
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
        {todoItems.map((todo: ITodoItem, index) => (
          <TodoItem key={index} {...todo}></TodoItem>
        ))}
      </div>
      {
        !!todoItems.length ?
          <TodoOptionsContainer
            activeItems={todoItems.filter((item) => item.state === TodoState.ACTIVE).length}
            setViewFilter={(filter: TodoViewFilter) => { setViewFilter(filter) }}
            clearCompleted={handleClearCompleted}
          /> : ''
      }
    </>
  )
};

export default TodoItemsContainer;
