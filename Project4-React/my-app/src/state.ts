export type TodoItem = {
    todo: string
    status: boolean
};

export type GlobalState = {
    todos: TodoItem[]
    inputValue: string
};

export const state: GlobalState = {
    todos: [
        {
            todo: "something to do",
            status: false
        },
        {
            todo: "something others",
            status: true
        },
        {
            todo: "something not to do",
            status: true
        }
    ],
    inputValue: ""
};