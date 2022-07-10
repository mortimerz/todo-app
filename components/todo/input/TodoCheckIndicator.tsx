import { useState } from "react";

interface ITodoCheckIndicator {
    checked: boolean
}

const TodoCheckIndicator: React.FC<ITodoCheckIndicator> = ({checked}) => {
    return (
        <div className="py-3 px-2">
            {checked ? (
                <div className="todo-check todo-check-selected">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9">
                        <path
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2.5"
                            d="M1 4.304L3.696 7l6-6"
                        />
                    </svg>
                </div>
            ) : (
                <div className="todo-check">
                    <div className="todo-check-fill"></div>
                </div>
            )}
        </div>
    );
};

export default TodoCheckIndicator;