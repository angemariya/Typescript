interface ToDoEntity {
    checkStatus: boolean;
    text: string;
    date: Date;
  };

  let task: ToDoEntity = {
    checkStatus: true,
    text: "hello",
    date: new Date("08/07/1987"),
  };
  
  interface TodoList {
    entries: ToDoEntity[];
  };
  
  const todoList: TodoList = {
    entries: [
      {
        date: new Date(),
        text: "",
        checkStatus: true,
      },
      task,
    ],
  };

  interface Model {
    currentTurn: number;
    field: number[];
  };

  const oX: Model = {
    currentTurn: 0, // 0 || 1
    field: [2,2,2,2,2,2,2,2,2], // 2 - пустое поле
  };

  