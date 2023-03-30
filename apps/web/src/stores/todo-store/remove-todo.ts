import { Todo } from "@app/types";

/**
 * Remove a todo by id
 * @param todos - The todos list
 * @param id - The todo id to remove
 * @throws Throws an error when the todo is not found
 */
export function removeTodo(todos: Todo[], id: Todo["id"]): Todo[] {
    if (!todos.length) {
        throw new Error("Todos cannot be empty");
    }

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
        throw new Error("Todo not found");
    }

    return todos.filter((todo) => todo.id !== id);
}