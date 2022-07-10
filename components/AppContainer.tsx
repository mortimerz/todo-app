import Footer from "./Footer";
import Header from "./Header";
import TodoItemsContainer from "./todo/items/TodoItemsContainer";
import TodoInputContainer from "./todo/input/TodoInputContainer";
import TodoStore from "../stores/TodoStore";
import TodoOptionsContainerMobile from "./todo/items/TodoOptionsContainerMobile";

const AppContainer: React.FC = () => {
    // main source of todo items
    const todoStore = new TodoStore();

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="app-container sm:gap-6 gap-2">
                <Header />
                <TodoInputContainer todoStore={todoStore} />
                <div className="sm:min-h-[80%] sm:max-h-[80%] min-h-[70%] max-h-[70%] flex flex-col">
                    <TodoItemsContainer
                        todoStore={todoStore}
                    />
                </div>
                <TodoOptionsContainerMobile todoStore={todoStore} />
                <Footer />
            </div>
        </div>
    );
};

export default AppContainer;


