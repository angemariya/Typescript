import * as data from "./shape.json";

/*
const input = document.querySelector("input");
if (input === null) {
  throw new Error("input doesn't exist");
}
const stringInput = input.value;
const parsedInput: unknown = JSON.parse(stringInput);
*/

type Triangle = {
  h: number;
  a: number;
};

type Circle = {
  r: number;
};

type Square = {
  a: number;
};

type Rectangle = {
  a: number;
  b: number;
};

const isCircle = (obj: unknown): obj is Circle =>
  typeof obj === "object" &&
  obj !== null &&
  obj.hasOwnProperty("r") &&
  typeof (obj as any).r === "number";

const isTriangle = (obj: unknown): obj is Triangle =>
  typeof obj === "object" &&
  obj !== null &&
  obj.hasOwnProperty("a") &&
  obj.hasOwnProperty("h") &&
  typeof (obj as any).a === "number" &&
  typeof (obj as any).h === "number";

const isRectangle = (obj: unknown): obj is Rectangle => 
    typeof obj === "object" &&
    obj !== null &&
    obj.hasOwnProperty("a") &&
    typeof (obj as any).a === "number" &&
    obj.hasOwnProperty("b") &&
    typeof (obj as any).b === "number";

const isSquare = (obj: unknown): obj is Square =>
  typeof obj === "object" &&
  obj !== null &&
  obj.hasOwnProperty("a") &&
  typeof (obj as any).a === "number" &&
  Object.keys(obj).length === 1;
//  !obj.hasOwnProperty("h") && !obj.hasOwnProperty("b")

const calculateSquare = (obj: unknown): number => {
  if (isCircle(obj)) {
    return Math.PI * obj.r ** 2;
  }
  if (isTriangle(obj)) {
    return 0.5 * obj.a * obj.h;
  }
  if (isSquare(obj)) {
    return obj.a ** 2;
  }

  if (isRectangle(obj)) {
    return obj.a * obj.b;
  }
  throw new Error("unsupported shape");
};

console.log(calculateSquare(data));
