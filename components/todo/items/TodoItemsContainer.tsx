
import TodoItem, { ITodoItem } from "./TodoItem";

interface ITodoItemsContainer {
  todoItems: ITodoItem[];
}
const TodoItemsContainer: React.FC<ITodoItemsContainer> = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((todo: ITodoItem, index) => (
        <TodoItem key={index} {...todo}></TodoItem>
      ))}
    </div>
  )
};

export default TodoItemsContainer;
