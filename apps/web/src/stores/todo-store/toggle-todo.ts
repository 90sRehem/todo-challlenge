import { Todo } from "@app/types";

/**
 * Toggles a todo in the list of todos
 *
 * @param {Todo[]} todos
 * @param {Todo["id"]} id
 * @returns {Todo[]}
 */
export function toggleTodo(todos: Todo[], id: Todo["id"]): Todo[] {
    if (!todos.length) {
        throw new Error("Todos cannot be empty");
    }

    if (id == null) {
        throw new Error("Invalid id");
    }

    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
        throw new Error(`Todo with id ${id} not found`);
    }

    return todos.map((todo, index) => {
        if (index === todoIndex) {
            return {
                ...todo,
                done: !todo.done,
            };
        }

        return todo;
    });
}