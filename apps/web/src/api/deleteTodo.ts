import { API_URL } from "../config";

export async function deleteTodo(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/todos`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    })

    if (response.status === 204) {
        return;
    }
    throw new Error("Could not delete todo");
}