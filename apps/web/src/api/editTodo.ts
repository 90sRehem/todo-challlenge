import { API_URL } from "../config";

export async function editTodo(
    id: string,
    title: string
): Promise<void> {
    return fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    }).then((res) => res.json());
}