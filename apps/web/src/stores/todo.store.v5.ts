import { useEffect, useReducer, useState, useSyncExternalStore } from "react";

type OnExitFunction<C extends Record<string, any>> = (context?: C) => void;
type ActionFunction<C extends Record<string, any>, P extends any> = (context?: C, payload?: P) => void;
type OnEnterFunction<C extends Record<string, any>> = (context?: C) => void;

type Transitions<T, E extends string, C extends Record<string, any>> = {
    [key in E]?: {
        target: T;
        action?: ActionFunction<C, any>;
    };
};

type Actions<C extends Record<string, any>> = {
    onEnter?: OnEnterFunction<C>;
    onExit?: OnExitFunction<C>;
};

type State<T, E extends string, C extends Record<string, any>> = {
    transitions: Transitions<T, E, C>;
    actions?: Actions<C>;
};

type MachineConfig<T extends string, E extends string, C extends Record<string, any>> = {
    initialState: T;
    states: { [key in T]: State<T, E, C> };
    context?: C;
};

type StateMachine<T, E extends string, C extends Record<string, any>> = {
    value: T;
    send<K extends E>(event: K, payload?: any): void;
    context?: C;
    // subscribe: (listener: (state: T, context?: C) => void) => () => void;
    // listeners: ((state: T, context?: C) => void)[];
};

export function createMachine<
    T extends string,
    E extends string,
    C extends Record<string, any>
>({
    initialState,
    states,
    context }: MachineConfig<T, E, C>): StateMachine<T, E, C> {
    let listeners: ((state: T, context?: C) => void)[] = [];

    // function subscribe(listener: (state: T, context?: C) => void): (() => void) {
    //     listeners.push(listener);

    //     return () => {
    //         listeners = listeners.filter(l => l !== listener);
    //     };
    // };

    // function broadcast() {
    //     const contextValue = context ?? {} as C;
    //     listeners.forEach(listener => listener(initialState, contextValue));
    // };

    return {
        value: initialState,
        context,
        send<K extends keyof Transitions<T, E, C>>(event: K, payload?: any) {
            const { target, action } = states[this.value].transitions[event] ?? {};
            const { onExit } = states[this.value].actions ?? {};

            if (typeof target === 'undefined') {
                throw new Error(`No transition found for event "${event}" in state "${this.value}"`);
            }

            const { onEnter } = states[target].actions ?? {};

            onExit?.(this.context);
            action?.(this.context, payload);
            onEnter?.(this.context);

            this.value = target;
            // broadcast();
        },
        // subscribe,
        // listeners,
    };
}

type UseMachine<T, E extends string, C extends Record<string, any>> = [T, C, (event: E, payload?: any) => void];

export function useMachine<
    T extends string,
    E extends string,
    C extends Record<string, any>
>(
    machine: StateMachine<T, E, C>,
    // onTransition?: (currentState: T, nextState: T) => void, // optional callback
): UseMachine<T, E, C> {
    const [state, setState] = useState<T>(machine.value);
    const [context, setContext] = useState<C>(machine.context ?? {} as C);
    // const [_, forceUpdate] = useReducer(x => x + 1, 0); // force update for listeners


    const send = (event: E, payload?: any) => {
        machine.send(event, payload);
        const nextState = machine.value;
        setState(nextState);
        setContext(machine.context ?? {} as C);
        // onTransition?.(state, nextState); // invoke callback with current and next state
        // forceUpdate(); // force update for listeners
    };

    // useEffect(() => {
    //     const unsubscribe = machine.context?.store?.subscribe(() => {
    //         // update state and invoke onTransition callback
    //         const nextState = machine.value;
    //         setState(nextState);
    //         setContext(machine.context ?? {} as C);
    //         onTransition?.(state, nextState);
    //         forceUpdate(); // force update for listeners
    //     });

    //     return () => unsubscribe && unsubscribe();
    // }, [machine, state, context, onTransition, forceUpdate]);


    return [state, context, send];
}

interface Todo {
    id: string
    title: string
    completed: boolean
}

type TodoMachine = StateMachine<'idle' | 'adding' | 'removing', 'ADD' | 'REMOVE' | 'CANCEL', { todos: Todo[] }>;

export const todoMachine = createMachine<
    'idle' | 'adding' | 'removing',
    'ADD' | 'REMOVE' | 'CANCEL',
    { todos: Todo[] }
>({
    initialState: 'idle',
    context: {
        todos: [],
    },
    states: {
        idle: {
            transitions: {
                ADD: { target: 'adding' },
                REMOVE: { target: 'removing' },
            },
            actions: {
                onEnter: () => console.log('Entering idle state'),
            },
        },
        adding: {
            transitions: {
                CANCEL: { target: 'idle' },
                ADD: {
                    target: 'idle', action: (context, payload: Todo) => {
                        context?.todos.push({
                            id: Math.random().toString(36).substring(2, 9),
                            title: payload.title,
                            completed: false,
                        });
                    }
                },
            },
            actions: {
                onEnter: () => console.log('Entering adding state'),
            },
        },
        removing: {
            transitions: {
                CANCEL: { target: 'idle' },
                REMOVE: { target: 'idle' },
            },
            actions: {
                onEnter: () => console.log('Entering removing state'),
            },
        },
    },
});

