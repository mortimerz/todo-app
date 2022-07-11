import { observer } from "mobx-react";
import TodoStore, { ITodoItem, TodoViewFilter } from "../../../stores/TodoStore";
import EmptyView from "./EmptyView";
import TodoItem from "./TodoItem";
import TodoOptionsContainer from "./TodoOptionsContainer";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
interface ITodoItemsContainer {
  todoStore: TodoStore;
}

const TodoItemsContainer: React.FC<ITodoItemsContainer> = ({ todoStore }) => {
  // reorder todo items on drag end event
  const handleOnDragEnd = (result: DropResult) => {
    // for improvement - do not allow reordering if current view filter is not ALL
    if (todoStore.viewFilter !== TodoViewFilter.ALL) {
      alert('Reordering is not allowed for Active and Completed view')
      return;
    }
    // if out of bounds just do an early return
    if (!result.destination) {
      return;
    }
    if (!!result) {
      const items = Array.from(todoStore.getTodoItems());
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination!.index, 0, reorderedItem);
      todoStore.updateTodoListOrder(items.reverse());
    }
  }

  return (
    <>
      {
        todoStore.getFilteredView().length > 0 ?
          (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="todoList">
                {(provided) => (
                  <div className="todo-items-container">
                    <ul className="w-[100%]" id="todoList" {...provided.droppableProps} ref={provided.innerRef}>
                      {todoStore.getFilteredView().map((todo: ITodoItem, index) => {
                        return (
                          <Draggable key={todo.uuid} draggableId={todo.uuid} index={index}>
                            {(provided) => (
                              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <TodoItem key={todo.uuid} todoStore={todoStore} {...todo} />
                              </li>
                            )}
                          </Draggable>
                        )
                      }
                      )}
                      {provided.placeholder}
                    </ul>
                  </div>
                )}
              </Droppable>
            </DragDropContext>

          ) : (
            <EmptyView todoStore={todoStore} />
          )
      }
      <TodoOptionsContainer todoStore={todoStore} />
    </>
  )
};

export default observer(TodoItemsContainer);
