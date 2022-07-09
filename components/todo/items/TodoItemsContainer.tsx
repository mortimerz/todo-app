
import TodoItem, { ITodoItem } from "./TodoItem";

interface ITodoItemsContainer {
  todoItems: ITodoItem[];
}
const TodoItemsContainer: React.FC<ITodoItemsContainer> = ({ todoItems }) => {
  return (
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
     <div className="todo-options sticky top-[100vh]">
      {
        !!todoItems.length ? 
        <div>
          TOdo option
        </div> : ''
      }
      </div>
    </div>
  )
};

export default TodoItemsContainer;
