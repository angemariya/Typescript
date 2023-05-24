type Square = {
    x : number,
    y: number,
    status: boolean,
};

type State = {
    entities: Square[],
};

const createSquare = (x: number, y: number, status: boolean): Square => {
    return {
        x: x,
        y: y,
        status: status,
    };
};

((): State => {
    const state: State = {
        entities: []
    };

    for (let j = 1; j <= 10; j++) {
        for (let i: number = 1; i <= 10; i++) {
            state.entities.push(createSquare(i, j, false));
        }
    }
    return state;
})();


const calculateElements = (localState: State, actions: object): HTMLDivElement[] => {

    const template = localState.entities.map(el => {
        const div = document.createElement("div");
        div.classList.add("field");
        div.addEventListener("click", () => actions.changeStatus(el))
        if (el.status) {
            div.style.backgroundColor = "green";
        }
        return div;
    })
    return template;
};


const render = (localState: State, root, actions): void => {  
    const elementsArray = elements(localState, actions);
    root.replaceChildren();
    root.append(...elementsArray);
  };

const getActions = (localState: State, root: Element): object => {
    const card = 
    {
    start: () => render(localState, root, card),
    
    changeStatus: (square: { status: boolean; }) => {
        square.status = !square.status;
        render(localState, root, card); 
    }
}
return card;
};
  
  const root: object | null = document.querySelector("#root");
  const actions = getActions(State, root);
 // const actions : getActions(State, root);
  actions.start();
