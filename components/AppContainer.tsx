import Footer from "./Footer";
import Header from "./Header";
import TodoItemsContainer from "./todo/items/TodoItemsContainer";
import TodoInputContainer from "./todo/input/TodoInputContainer";
import { useState } from "react";

enum TodoState {
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}
interface ITodoItem {
    isChecked: boolean;
    title: string;
    state: TodoState;
}

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
                <div className="min-h-[250px] max-h-[500px]">
                    <TodoInputContainer handleAddTodoItem={addTodoItem}/>
                    <TodoItemsContainer />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppContainer;


