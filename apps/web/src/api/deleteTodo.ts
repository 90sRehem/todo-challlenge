import { API_URL } from "../config";

export async function deleteTodo(id: string): Promise<void> {
    await fetch(`${API_URL}/todos`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },  
        body: JSON.stringify({ id }),
    })
}