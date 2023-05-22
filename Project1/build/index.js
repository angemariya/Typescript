"use strict";
;
let task = {
    checkStatus: true,
    text: "hello",
    date: new Date("08/07/1987"),
};
;
const todoList = {
    entries: [
        {
            date: new Date(),
            text: "",
            checkStatus: true,
        },
        task,
    ],
};
;
const oX = {
    currentTurn: 0,
    field: [2, 2, 2, 2, 2, 2, 2, 2, 2], // 2 - пустое поле
};
