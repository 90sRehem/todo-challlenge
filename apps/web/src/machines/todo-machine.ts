import { assign, createMachine } from 'xstate';
import { Todo } from "../types"
import { nanoid } from "nanoid/async"

async function fetchTodos() {
    const res = await fetch("http://localhost:3000/todos")
    const data = await res.json()
    return data
}

type Events =
    | { type: "onChange", value: string }
    | { type: "submit" }
    | { type: "delete", value: string }
    | { type: "markAsDone", value: string }
    // | { type: "markAsDoneInContext", value: string }


export const todoMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQA2quEZUAxBuRWQG6oDWlaGOBEqxp0GCDqny4ALsVSkA2gAYAuspWJQAB1Sxis+ZpAAPRACYALAHYKZgJwA2ABxWArABoQAT0QWnARgp-AGYzALNXAF9Izz4sPCIyShF6UiYwACcM1AyKLSoZADMcgFsKOIFE4VpUqHFSTikDRVV1Ix09ZqNTBAibe2c3Tx8EAIoomJAKhKFKYoySgGVpGUpiCCowRnkAYUJcNLA2pBAO-TlSbsRgtworYItXJ2ClJ3tQhwdhxAczM1tgq4zEprBY7KDgtFYuh4oIkhR5ksVtI1hstrAAK4AIxK+mO2l050MJx6DlcNhBFiUdiU-iUnysr2+CAc-gsticrlC-jsQN+Fkhk2mcNYiOWqwodAgcWY8jWDW4vBhlVmCNK4pRkog0ph9UaMgu6nxp0JXRJ5nJtkcLg83nMYIodgGLjBdjdbqsUKmypm8LFyMoUplmWyuXyRVK5R9Irm6oDWp1GD1kgN8iNqnapouVxZLwoSmBZLMDnpDkZTmZLycFCcSis1lcr1cIVZDi9wqqsYWGtRm22pAASmASqh2EcMyczmbQD1XE6KA8LMD-PW7M9XBZmVY-vngo5i0WHBYBe3o521d34xlh6OwDKWPLODwKBAwJsUcap9nzaMN0E3FY4S2iM9aBJYboOOCbxLjy0STKQ6BwEYHazJmnTfjOiAALRfHaCBYa4jrum8LoCoCTgWKe-C+tUohpGhRKXD+S7Mv4-iEeSQFUbC54hjkDHTiYvgPACApDHhbEOBQjzBP4ETcSqfpxqsAkYUJCChDY9yPM8rzvAezJ-IELz1q4Dg3IBnKOApNFdkiErrJsqnEphCDWNWtJmREzJAsEC6AnYNwTNC1Exhe9makGMLOUxrlWPOxZsvcZZKDc3l4ce1aMm6FFclYVglpRQpnqq-oSteI5jnEMU5vc1ZsfY1jsY11jMpyNg8korhPEu1gDHBkRAA */

    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQA2quEZUAxBuRWQG6oDWlaGOBEqxp0GCDqny4ALsVSkA2gAYAuspWJQAB1Sxis+ZpAAPRAFYATABoQAT0QAOAIwUALAE5PDiw4Dsr1wBmQLMHAF8wmz4sPCIyShF6UiYwACdU1FSKLSoZADNMgFsKaIE44VokqHFSTikDRVV1Ix09BqNTBCcldwcKMyVBpQclXwA2MbNQm3sEQKczCiUgi27fJzHXCwmIqPQYwXiKAtTCgGVpGUpiCCowRnkAYUJcZLBmpBBW-TlSDsdfDNEIElIsLEp5j0xoFXE5-OFIiBSrEhJQTudLtJrrd7rAAK4AI0K+g+2l0P0Mn06G1c-Xc8ycjM2TgcZnGQIQm3c-QcYwsrm8DlcviUTl2SP2ZVRxyKFyubBxzDAdyxpK+5PaVMQ2yUFD8Aws9NChs2HNcSgseqUfNcZnc-kCq18vnFyMOrHRcqxCrujEKuFSXAAgrAACLyd6qFoa37-BAAWkdvgo9PmUzG7gsbL8HMsi08vkCvN8U1C9NdkpRR09mModAg0WYEbYtW4vEr7rRstrFHr0RqdRkv3Uau+mtAnXWtMmNtGYx6nkCZozFAsa789ppTi2rgr-CrHu78r7+0YaQyWRy+SKJQ75S7py9dYgDf2A8kQ-kI6jnzHsa1CBZoEeogqKPRmEWHj8rm2wUN0wqTO4AoloEe4HPeMqPj2qRgIUqDsGAjYsNcrY8Le+6dphGLyjheEEf2Ej1MOTQ-mSbT-hOiBKByShoVK1ZHt6tH4YRp7npk2S5NI6Lkeh0o1jRuEiQxrZMV+LEaL+MaUpxCDcXYXF8QelD+oG4bkE2rASGRboYaZXDmWA75qY0aiseq7E6SYiDxraLhZhyvn+WYRmUfZjlnukElXtJN62dK4URs5n6uaO2l-AB8aTMFgVOPMq4heKpDoHARjxfE0aeRlulZZ4BWBasfQlkMPhjN0a7uIVewURhiQMJVFLVd5CAOL0q4Qk4-KBOsLIOEuBlzLBHjQiE2xTfau6IuVrDiakA3jsNk0lm402WLyExmLNHIwtyngrUKZgBOCm3dXJAlYVc+0ccN8aFnS4JHVMWYbGMHJOhQIrzKsozeBdCKvfxh4fd6Nx3F9XmdPGWb-aKFglnmIMwbqoKjFCJpOO4oUYQp3onhg6NDZ0ARjBQEzbs6FPbB4QrLsmARISCc0eLCQpU-JgmUMJ9H7AzcZbMmzhZju7jWhMc3XRYwF3SE8y+A4QojC9Eo9QlAYORGsuZZsupTB4LLWt0joOGDY3bI9RoTME7hjBEERAA */
    createMachine({
        id: "Todo Machine",
        predictableActionArguments: true,
        schema: {
            events: {} as Events,
            context: {
                todos: [] as Todo[],
                errorMessage: undefined as string | undefined,
                formInput: undefined as string | undefined,
            },
            services: {} as {
                fetchTodos: {
                    data: Todo[];
                },
                saveTodo: {
                    data: void;
                },
                deleteTodo: {
                    data: void;
                },
                markAsDone: {
                    data: void;
                },
            },
        },
        tsTypes: {} as import("./todo-machine.typegen").Typegen0,
        initial: "loading",
        states: {
            loading: {
                invoke: {
                    src: "fetchTodos",
                    onDone: {
                        target: "#Todo Machine.formState.idle",
                        actions: ["storeTodos", "logTodos"],
                    },
                    onError: {
                        target: "error",
                        actions: ["storeError", "logTodos"],
                    },
                },
            },

            error: {},

            formState: {
                states: {
                    idle: {
                        on: {
                            onChange: {
                                target: "idle",
                                actions: "storeFormInput"
                            },

                            submit: {
                                target: "addTodo",
                                // actions: "addToStore"
                            },

                            delete: {
                                target: "removeTodo",
                                // actions: "removeFromStore"
                            },

                            markAsDone: "#Todo Machine.markDone"
                        },
                    },

                    addTodo: {
                        invoke: {
                            src: "saveTodo",
                            onDone: {
                                target: "#Todo Machine.loading",
                            },
                            onError: { target: "idle", actions: ["storeError"] },
                        }
                    },

                    removeTodo: {
                        invoke: {
                            src: "deleteTodo",
                            onDone: {
                                target: "#Todo Machine.loading",
                            },
                            onError: { target: "#Todo Machine.error", actions: ["storeError"] },
                        }
                    }
                },

                initial: "idle"
            },

            markDone: {
                invoke: {
                    src: "markAsDone",
                    onDone: {
                        target: "#Todo Machine.loading",
                        // actions: "markAsDoneInContext"
                    },
                    onError: {
                        target: "#Todo Machine.error",
                        actions: ["storeError"],
                    }
                }
            }
        },
    }, {
        actions: {
            logTodos: (_, event) => {
                console.log(event.data)
            },
            storeTodos: assign((context, event) => ({
                ...context,
                todos: event.data,
            })),
            storeError: assign((_, event) => ({
                errorMessage: (event.data as Error).message,
            })),
            storeFormInput: assign((_, event) => ({
                formInput: event.value,
            })),
            // markAsDoneInContext: assign((context, event) => {
            //     const todo = context.todos.find(todo => todo.id === event.value)
            // }),
            // addToStore: assign((context, event) => {
            //     const newTodo = {
            //         id: nanoid(),
            //         title: context.formInput as string,
            //         completed: false,
            //     }
            //     return {
            //         ...context,
            //         todos: [...context.todos, newTodo],
            //     }
            // }),
            // removeFromStore: assign((context, event) => {
            //     const newTodos = context.todos.filter(todo => todo.id !== event.value)
            //     return {
            //         ...context,
            //         todos: newTodos,
            //     }
            // }),
        },
        services: {
            fetchTodos: async () => {
                const res = await fetchTodos()
                return res
            },
            saveTodo: async (context) => {
                const todo = {
                    id: await nanoid(),
                    title: context.formInput,
                    completed: false,
                }

                if (!context.formInput) {
                    throw new Error("Please enter a todo")
                }

                await fetch("http://localhost:3000/todos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(todo)
                })
            },
            deleteTodo: async (context, event) => {
                await fetch(`http://localhost:3000/todos/${event.value}`, {
                    method: "DELETE",
                })
            },
            markAsDone: async (context, event) => {
                if (!context.todos.find(todo => todo.id === event.value)) {
                    throw new Error("Todo not found")
                }

                const todo = context.todos.find(todo => todo.id === event.value)
                console.log("🚀 ~ file: simple.store.ts:213 ~ markAsDone: ~ todo?.completed", todo?.completed)

                await fetch(`http://localhost:3000/todos/${event.value}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        completed: !todo?.completed,
                    })
                })
            }
        },
    })

