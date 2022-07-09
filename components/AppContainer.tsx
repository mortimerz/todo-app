import Footer from "./Footer";
import Header from "./Header";
import TodoItemsContainer from "./todo/items/TodoItemsContainer";
import TodoInputContainer from "./todo/input/TodoInputContainer";
import { useState } from "react";
import { ITodoItem, TodoState } from "./todo/items/TodoItem";

const AppContainer: React.FC = () => {
    const [todos, setTodos] = useState<ITodoItem[]>([]);

    const addTodoItem = (isChecked: boolean, title: string) => {
        const todo: ITodoItem = { isChecked, title, state: TodoState.ACTIVE }
        setTodos([...todos, todo]);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center ">
            <div className="app-container">
                <Header />
                <div className="min-h-[85%] max-h-[80%] gap-4 flex flex-col">
                    <TodoInputContainer handleAddTodoItem={addTodoItem}/>
                    <TodoItemsContainer todoItems={todos}/>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppContainer;


