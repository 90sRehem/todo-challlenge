import { describe, it } from "vitest";
import { editTodo } from "../edit-todo";

describe("editTodo tests", () => {
    it("should throw an error if the todo is not found", () => {
        const todos = [
            {
                id: "1",
                title: "Learn React",
                done: false,
            },
        ];

        expect(() => editTodo(todos, "2", "Learn React")).toThrowError(
            "Todo not found"
        );
    });

    it("should throw an error if the title is invalid", () => {
        const todos = [
            {
                id: "1",
                title: "Learn React",
                done: false,
            },
        ];

        expect(() => editTodo(todos, "1", "")).toThrowError("Invalid title");
    });

    it("should update the title of the todo", () => {
        const todos = [
            {
                id: "1",
                title: "Learn React",
                done: false,
            },
        ];

        const updatedTodos = editTodo(todos, "1", "Learn React and TypeScript");

        expect(updatedTodos).toEqual([
            {
                id: "1",
                title: "Learn React and TypeScript",
                done: false,
            },
        ]);
    });
});