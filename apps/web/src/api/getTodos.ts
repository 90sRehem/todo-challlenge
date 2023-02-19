import { API_URL } from "../config"
import { Todo } from "../types"

export async function getTodos(): Promise<Todo[]> {
    const res = await fetch(`${API_URL}/todos`)
    const data = await res.json()
    return data
}