import { useCallback } from "react";
import { todoMachine } from "../machines";
import { useMachine } from "@xstate/react";

export function useTodoMachine() {
    // const [state, send] = useMachine(todoMachine);

    // const addTodo = useCallback((title: string, completed: boolean) => {
    //     send({ type: 'ADD', title, completed });
    // }
    //     , [send]);

    // const completeTodo = useCallback((id: string) => {
    //     send({ type: 'COMPLETE_TODO', id });
    // }
    //     , [send]);

    // const removeTodo = useCallback((id: string) => {
    //     send({ type: 'REMOVE', id });
    // }
    //     , [send]);

    // const cancelAddTodo = useCallback(() => {
    //     send({ type: 'CANCEL' });
    // }
    //     , [send]);

    return {
        // state,
        // addTodo,
        // completeTodo,
        // removeTodo,
        // cancelAddTodo,
    };

}