import Footer from "./Footer";
import Header from "./Header";
import TodoItemsContainer from "./todo/items/TodoItemsContainer";
import TodoInputContainer from "./todo/input/TodoInputContainer";
import TodoStore from "../stores/TodoStore";

const AppContainer: React.FC = () => {
    // main source of todo items
    const todoStore = new TodoStore();

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="app-container gap-6">
                <Header />
                <TodoInputContainer todoStore={todoStore} />
                <div className="min-h-[80%] max-h-[80%] flex flex-col">
                    <TodoItemsContainer
                        todoStore={todoStore}
                    />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppContainer;


