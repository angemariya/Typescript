import { useEffect, useState } from "react";

interface Action {
  type: string;
  payload: any;
}

export type Reducer<T extends {}> = (state: T, action: Action) => T;

const listeners: (() => void)[] = []; // создаем массив с функциями listener'ами

let stateSaver: any = {};

let stateReducer: Reducer<any>;

export function dispatch(action: Action) {
    stateSaver = stateReducer(stateSaver, action)
    listeners.forEach(el => el());
}

export function connect<T extends {}, P>(mapStateToProps: (state:T)=>P, Component: React.ComponentType<P>) {
    
    //let allPairs = Object.keys(state).map(el => [el, (state as any)[el]]);

    return (props: JSX.IntrinsicAttributes) => {
        const newProps = mapStateToProps(stateSaver);
        const [, setCount] = useState(0);

        useEffect(() => {
            const listener = () => {
                mapStateToProps(stateSaver) !== newProps && setCount(prev => prev + 1)                
            };
            listeners.push(listener);

            return () => { listeners.splice(listeners.indexOf(listener), 1) };
            // удаляем созданную функцию из массива listener
        }, [newProps])
/*
        useEffect(() => {
            const id = setInterval(() => {
                console.log("Timeout");
                
                const isChanged = allPairs.map(([key, value]) => {
                    if ((state as any)[key] === value) {
                        return false;
                    }
                    return true;
                }).includes(true);

                if (isChanged) {
                    setCount(prev => prev + 1);
                    allPairs = Object.keys(state).map(el => [el, (state as any)[el]]);
                }
                console.log(isChanged);
                
            }, 500);
            return () => clearInterval(id);
        }, []) 
*/ 
        return <Component {...newProps} {...props} />
    }
}

export function composeReducers<T extends {}>(...reducers: Reducer<any>[]): Reducer<T>  {
    //return reducers.reduce((a, b) => (state, action) => b(a(state, action), action))
    return (state, action) => reducers.reduce((acc, el)=> el(acc, action), state)
}

export function createStore<T extends {}>(reducer: Reducer<T>, initialState: T) {
    stateSaver = initialState;
    stateReducer = reducer;
}
