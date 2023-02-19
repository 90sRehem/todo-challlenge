import { API_URL } from "../config"
import { Todo } from "../types"

export async function createTodo(todo: Todo): Promise<Todo> {
    const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
    const data = await res.json()
    return data
}

