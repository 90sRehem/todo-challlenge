import { API_URL } from "../config";

export async function markTodoAsDone(): Promise<void> {
    const response = await fetch(`${API_URL}/todos`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "test" }),
    })

    if (!response.ok) {
        throw new Error("Error marking todo as done");
    }
}