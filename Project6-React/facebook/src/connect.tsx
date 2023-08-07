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

export function connect<T extends {}, P>(mapStateToProps: (state: T) => P, Component: React.ComponentType<P>) {

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

type CombinedReducer<T extends unknown[]> = Reducer<CombinedState<T>>;

type CombinedState<T extends unknown[]> =
    T extends [Reducer<infer R>]
    ? R
    : T extends [Reducer<infer R1>, ...infer REST]
    ? R1 & CombinedState<REST>
    : {};

export function composeReducers<T extends Reducer<any>[]>(...reducers: T): CombinedReducer<T> {
    //return reducers.reduce((a, b) => (state, action) => b(a(state, action), action))
    return (state, action) => reducers.reduce((acc, el) => el(acc, action), state)
}

export function createStore<T extends {}>(reducer: Reducer<T>, initialState: T) {
    stateSaver = initialState;
    stateReducer = reducer;
}

export function createAction<T extends unknown[]>(type: string, callback: (...args: T) => unknown) {
    return (...args: T) => {
        dispatch({ type, payload: callback(...args) })
    }
}

type FuncDictionary = {
    [index: string]: (...args: any[]) => any;
}

type BranchesDictionary<S extends {}> = {
    [index: string]: (state: S, action: Action) => Partial<S>;
}

type Actions<T extends FuncDictionary> = {
    [K in keyof T]: (...args: Parameters<T[K]>) => void;
}

export function createActions<T extends FuncDictionary>(actions: T): Actions<T> {
    return Object.keys(actions) //pattern
        .reduce((acc, key) =>

            (acc[key] = createAction(key as string, actions[key]))
            && acc,
            {} as Actions<T>)
}

type Patch<S extends {}> = (state: S, action: Action) => Partial<S>

export function createReducer<
    S extends {},
    P extends string,
    T extends BranchesDictionary<S> = BranchesDictionary<S>
>(prefix: P, branches: T): Reducer<{ [prefix in typeof prefix]: S }> {
    const helperFunc = (state: { [prefix in typeof prefix]: S }, arg: Patch<S>, action: Action) => ({
        ...state,
        [prefix]: {
            ...state[prefix],
            ...(arg(state[prefix], action))
        }
    })
    return (state, action) => {
        const patch = (branches as any)[action.type]
        if (patch) {
            return helperFunc(state, patch, action)
        }
        return state;
    }
}

type SliceActions<S extends {}, T extends ReducerDictionary<S>> = {
    [K in keyof T]: (...args: Parameters<T[K]["prepare"]>) => void;
}

export type Slice<P extends string, S extends {}, A extends ReducerDictionary<S>> = {
    initialState: { [prefix in P]: S };
    reducer: Reducer<{ [prefix in P]: S }>;
    actions: SliceActions<S, A>
}

type ReducerDictionary<S extends {}> = {
    [index: string]: {
        reducer: (state: S, action: Action) => Partial<S>,
        prepare: (...args: any[]) => any
    }
}

export function createSlice<
    P extends string,
    S extends {},
    A extends ReducerDictionary<S> = ReducerDictionary<S>>
    (prefix: P, initialState: S, actions: A): Slice<P, S, A> {
    return {
        initialState: {
            [prefix]: initialState
        } as { [prefix in P]: S },
        reducer: createReducer(prefix, Object.keys(actions)
            .reduce((acc, key) => (acc[key] = actions[key].reducer) && acc,
                {} as any)),
        actions: createActions(Object.keys(actions)
            .reduce((acc, key) => (acc[key] = actions[key].prepare) && acc,
                {} as any)) as any,
    }
}

export function useSelector<T extends {}, P>(mapStateToProps: (state: T) => P) {
    const data = mapStateToProps(stateSaver);
    const [, setCount] = useState(0);

    useEffect(() => {
        const listener = () => {
            mapStateToProps(stateSaver) !== data && setCount(prev => prev + 1)
        };
        listeners.push(listener);

        return () => { listeners.splice(listeners.indexOf(listener), 1) };
        // удаляем созданную функцию из массива listener
    }, [data])
    return data;
}


/*
type StringLiteral = "literal" //тип строковый литерал

const newString: StringLiteral = "literal"*/