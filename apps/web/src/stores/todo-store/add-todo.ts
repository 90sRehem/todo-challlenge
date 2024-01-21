import { Todo } from "@app/types";
import { nanoid } from "nanoid";

/**
 * Adds a new todo to the list of todos
 * @param todos the array of todos
 * @param title the title of the new todo
 * @returns new array of todos
 */
export function addTodo(todos: Todo[], title: Todo["title"]): Todo[] {
    if (!title) {
        throw new Error("Title is required");
    }

    const newTodo: Todo = {
        id: nanoid(36),
        title,
        done: false,
    };
    const newTodos = [...todos, newTodo];

    return newTodos;
}