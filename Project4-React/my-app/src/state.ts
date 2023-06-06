import { useState } from "react";

export type TodoItem = {
    todo: string
    status: boolean
};

export type GlobalState = {
    todos: TodoItem[]
    inputValue: string
    images: string[]
    page: number
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
    inputValue: "",
    images: [
        "https://picsum.photos/seed/1/200/300",
        "https://picsum.photos/seed/2/200/300",
        "https://picsum.photos/seed/3/200/300",
        "https://picsum.photos/seed/4/200/300",
        "https://picsum.photos/seed/5/200/300",
        "https://picsum.photos/seed/6/200/300",
        "https://picsum.photos/seed/7/200/300",
        "https://picsum.photos/seed/8/200/300",
        "https://picsum.photos/seed/9/200/300",
        "https://picsum.photos/seed/10/200/300",
    ],
    page: 0,
};

