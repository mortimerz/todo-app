import TodoCheckIndicator from "./TodoCheckIndicator";
const TodoInputContainer = () => {


    return (
        <div className="f
            flex 
            flex-row 
            h-[50px] 
            w-full 
            bg-[#FFF]
            dark:bg-dark-very-dark-grayish-blue 
            rounded 
            gap-1">
            <TodoCheckIndicator isChecked={false} />
            <input
                className="
                    bg-transparent
                    w-full 
                    py-2
                    px-2
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    placeholder-light-light-grayish-blue
                    dark:placeholder-dark-dark-grayish-blue
                    dark:text-dark-light-grayish-blue
                    "
                type="text"
                placeholder="Type a Todo Item"
                onKeyDown={(e) => {
                    console.log(e.key)
                }}
            />
        </div>);
};

export default TodoInputContainer;
