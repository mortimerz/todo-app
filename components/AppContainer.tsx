import Header from "./Header";

const AppContainer: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <div className="app-container">
        <Header />
        <div className=" min-h-[250px] max-h-[500px]">
          Contents will go here
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
