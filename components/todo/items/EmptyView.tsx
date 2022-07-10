import { observer } from "mobx-react-lite";
import TodoStore, { TodoState, TodoViewFilter } from "../../../stores/TodoStore";

interface IEmptyView {
    todoStore: TodoStore;
}

const EmptyView: React.FC<IEmptyView> = ({ todoStore }) => {
    let message = '';

    switch (todoStore.viewFilter) {
        case TodoViewFilter.ACTIVE:
            message = 'You have no Active items remaining.'
            break;
        case TodoViewFilter.COMPLETED:
            message = 'You have no Completed items.'
            break;
        default:
            message = 'Add a Todo item. Check to complete, uncheck to reactivate.'
            break;
    }
    return (
        <div className="todo-empty">
            {message}
        </div>
    )
}

export default observer(EmptyView);
