import { Todo } from "@app/types";
import { describe, it, expect } from "vitest";
import { addTodo } from "../add-todo";
import { todoMock } from "./todo-mock";

let todos: Todo[] = [];

describe("addTodo Tests", () => {
    beforeEach(() => {
        todos = [...todoMock];
    });

    it("should add a new todo to the list of todos", () => {
        const title = "new Todo";
        const newTodos = addTodo(todos, title);
        const newTodo = {
            id: expect.any(String),
            title,
            done: false,
        };
        todos.push(newTodo);
        expect(newTodos).toEqual(todos);
    });

    it("should throw an error if title is not provided", () => {
        const title = "";
        expect(() => addTodo(todos, title)).toThrowError("Title is required");
    });
});