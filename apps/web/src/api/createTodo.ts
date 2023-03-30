import { API_URL } from "../config"
import { Todo } from "../types"

export async function createTodo(todo: Todo): Promise<Todo> {
    try {
        const res = await fetch(`${API_URL}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
        if (!res.ok) {
            throw new Error(`Unable to create todo with id ${todo.id}`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error(`Unable to create todo with id ${todo.id}`)
    }
}

