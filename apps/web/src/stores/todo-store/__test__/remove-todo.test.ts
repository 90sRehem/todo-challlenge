import { Todo } from "@app/types";
import { describe } from "vitest";
import { removeTodo } from "../remove-todo";
import { todoMock } from "./todo-mock";

let todos: Todo[] = [];

describe("removeTodo tests", () => {
    beforeEach(() => {
        todos = [...todoMock];
    });

    it("should remove a todo by id", () => {
        const id = "1";
        const newTodos = removeTodo(todos, id);
        expect(newTodos).toEqual([
            {
                id: "2",
                title: "Todo 2",
                done: false,
            },
        ]);
    });

    it("should throw an error when the todo is not found", () => {
        const id = "3";
        expect(() => removeTodo(todos, id)).toThrowError("Todo not found");
    });
});