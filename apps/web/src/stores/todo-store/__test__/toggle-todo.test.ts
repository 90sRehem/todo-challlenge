import { Todo } from "@app/types";
import { describe } from "vitest";
import { toggleTodo } from "../toggle-todo";
import { todoMock } from "./todo-mock";

let todos: Todo[] = [];

describe('toggleTodo tests', () => {
    beforeEach(() => {
        todos = [...todoMock];
    });

    it('should toggle a todo', () => {
        const newTodos = toggleTodo(todos, todos[0].id);
        expect(newTodos[0].done).toBe(true);
    });

    it('should throw an error when the todo is not found', () => {
        expect(() => toggleTodo(todos, 'not-found')).toThrowError('Todo with id not-found not found');
    });

    it('should throw an error when the todos list is empty', () => {
        expect(() => toggleTodo([], todos[0].id)).toThrowError('Todos cannot be empty');
    });
});