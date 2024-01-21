import { API_URL } from "../config";

export async function editTodo(
    id: string,
    title: string
): Promise<void> {
    const url = new URL(`${API_URL}/todos/${id}`);
    const response = await fetch(url.toString(), {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    })

    if (!response.ok) {
        throw new Error(response.statusText);
    }
}