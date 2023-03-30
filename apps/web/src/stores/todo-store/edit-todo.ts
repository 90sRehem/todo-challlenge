import { Todo } from "@app/types";
/**
 * This function takes an array of Todo objects, an id, and a title, and returns a new array of Todo objects with the title of the Todo object with the given id updated to the given title.
 *
 * @param todos - An array of Todo objects.
 * @param id - A string representing the id of a Todo object.
 * @param title - A string representing the new title for the Todo object with the given id.
 *
 * @returns An array of Todo objects with the title of the Todo object with the given id updated to the given title.
 */
export function editTodo(
    todos: Todo[],
    id: string,
    title: string
): Todo[] {
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
        throw new Error("Todo not found");
    }

    if (typeof title !== "string" || title.trim().length === 0) {
        throw new Error("Invalid title");
    }

    return todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                title,
            };
        }

        return todo;
    });
}