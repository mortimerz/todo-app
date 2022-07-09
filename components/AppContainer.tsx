import Footer from "./Footer";
import Header from "./Header";
import TodoItemsContainer from "./todo/TodoItemsContainer";
import TodoInputContainer from "./todo/TodoInputContainer";

const AppContainer: React.FC = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center ">
            <div className="app-container">
                <Header />
                <div className="min-h-[250px] max-h-[500px]">
                    <TodoInputContainer />
                    <TodoItemsContainer />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppContainer;


