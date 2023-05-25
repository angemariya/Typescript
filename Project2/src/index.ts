import React from "react";

type Square = {
  x: number;
  y: number;
  status: boolean;
};

type State = {
  entities: Square[];
};

const createSquare = (x: number, y: number, status: boolean): Square => {
  return {
    x: x,
    y: y,
    status: status,
  };
};

const state: State = ((): State => {
  const state: State = {
    entities: [],
  };

  for (let j = 1; j <= 10; j++) {
    for (let i: number = 1; i <= 10; i++) {
      state.entities.push(createSquare(i, j, false));
    }
  }
  return state;
})();

interface Actions {
  start: () => void;
  changeStatus: (square: { status: boolean }) => void;
}

const calculateElements = (
  localState: State,
  actions: Actions
): HTMLElement[] => {
  const template = localState.entities.map((el) => {
    const div = document.createElement("div");
    div.classList.add("field");
    div.addEventListener("click", () => actions.changeStatus(el));
    if (el.status) {
      div.style.backgroundColor = "green";
    }
    return div;
  });
  return template;
};

const render = (localState: State, root: Element, actions: Actions): void => {
  const elementsArray = calculateElements(localState, actions);
  root.replaceChildren();
  root.append(...elementsArray);
};

const getActions = (localState: State, root: Element): Actions => {
  const card = {
    start: () => render(localState, root, card),

    changeStatus: (square: { status: boolean }) => {
      square.status = !square.status;
      render(localState, root, card);
    },
  };
  return card;
};

const root: Element | null = document.querySelector("#root");
if (root === null) {
  throw new Error("Error");
}
const actions = getActions(state, root);
actions.start();

interface Shape {
  square: number;
}

interface Boxed<T> {
  content: T;
}

const value: Shape = {
  square: 1,
};

const boxedValue: Boxed<Shape> = {
  content: {
    square: 1,
  },
};

const boxedString: Boxed<string> = {
  content: "safqw",
};

const arr1: number[] = [];
const arr2: Array<number> = [];

function boxValue<T>(value: T): Boxed<T> {
  return {
    content: value,
  };
}

const boxedNumber = boxValue<number>(21);
typeof boxedNumber.content === "number";

const boxedDate = boxValue<Date>(new Date());
boxedDate.content instanceof Date;

function badBoxValue(value: unknown): { content: unknown } {
  return {
    content: value,
  };
}

const boxedDate2 = badBoxValue(new Date());
boxedDate2.content;

interface GenericMethods {
  method: <T>(val: T) => Boxed<T>;
}

declare const methods: GenericMethods;

methods.method<number>(12);

interface GenericMethods2<T> {
  method: <U>(val: T) => Boxed<U>;
}

function map<T, U>(arr: T[], cb: (el: T, index: number, array: T[]) => U): U[] {
  return [];
}

const numbers: number[] = [1, 2, 3];
const strings: string[] = ["a", "b"];

const squaredNumbers = map<number, number>(numbers, (el) => el * el);

const doubledStrings = map<string, string>(strings, (el) => el + el);

const lengths = map<string, number>(strings, (el) => el.length);

const boxedNumbers = map<number, Boxed<number>>(numbers, (el) =>
  boxValue<number>(el)
);

["1", "2", "3", "4", "5"].reduce((acc, el, i) => acc + el, {});

function forEach<T>(
  arr: T[],
  cb: (el: T, index: number, array: T[]) => void
): void {
  return undefined;
}

function filter<T>(arr: T[], cb: (el: T, index: number, array: T[]) => T): T[] {
  return [];
}

function reduce<T, U>(
  arr: T[],
  cb: (acc: T, el: T, index: number, array: T[]) => U | T,
  start: U
): U | T {
  return U || T;
}

export function DNAtoRNA(dna: string): string {
  return dna
    .split("")
    .map((letter: string) => {
      if (letter == "T") {
        return (letter = "U");
      } else {
        return letter;
      }
    })
    .join("");
}

export const makeNegative = (num: number): number => {
  return -Math.abs(num);
};

export function updateLight(current: string): string | undefined {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : undefined;
}

console.log(updateLight("yellow"));
