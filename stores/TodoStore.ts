import { action, observable, makeObservable, toJS } from 'mobx';

export enum TodoState {
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}
export interface ITodoItem {
    description: string;
    state: TodoState;
    uuid: string;
}
export enum TodoViewFilter {
    ALL = "ALL",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
}

export default class TodoStore {
    @observable public todoItems: ITodoItem[] = []
    @observable viewFilter: TodoViewFilter = TodoViewFilter.ALL;

    constructor() {
        makeObservable(this);
    }

    @action
    public addTodoItem = (description: string, state: TodoState) => {
        const uuid = window.crypto.randomUUID();
        this.todoItems = [...this.todoItems, { description, state, uuid }];
    }

    public getFilteredView = () => {
        switch (this.viewFilter) {
            case TodoViewFilter.ACTIVE:
                return toJS(this.todoItems.filter(todo => todo.state === TodoState.ACTIVE));
            case TodoViewFilter.COMPLETED:
                return toJS(this.todoItems.filter(todo => todo.state === TodoState.COMPLETED));
            default:
                return toJS(this.todoItems);
        }
    }

    @action
    public setViewFilter = (view: TodoViewFilter) => {
        this.viewFilter = view;
    }

    @action
    public removeTodoItem = (todoItem: ITodoItem) => {
        this.todoItems = this.todoItems.filter(({ uuid }) => todoItem.uuid !== uuid);
    }

    @action
    public clearCompletedTodoItems = () => {
        this.todoItems = this.todoItems.filter(({ state }) => TodoState.COMPLETED !== state);
    }

    @action
    public toggleTodoItemCheckState = (uuid: string) => {
        const todoItem = this.todoItems.find(todo => todo.uuid === uuid);
        todoItem!.state = (todoItem!.state === TodoState.ACTIVE ? TodoState.COMPLETED : TodoState.ACTIVE);
    }

    public showTodos = () => {
        console.log(toJS(this.todoItems));
    }
}
