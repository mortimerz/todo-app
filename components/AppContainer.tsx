import Footer from "./Footer";
import Header from "./Header";
import TodoHolder from "./todo/TodoHolder";
import TodoInput from "./todo/TodoInput";

const AppContainer: React.FC = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center ">
            <div className="app-container">
                <Header />
                <div className="min-h-[250px] max-h-[500px]">
                    <TodoInput />
                    <TodoHolder />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppContainer;


