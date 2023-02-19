
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.Todo Machine.formState.addTodo:invocation[0]": { type: "done.invoke.Todo Machine.formState.addTodo:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.Todo Machine.formState.removeTodo:invocation[0]": { type: "done.invoke.Todo Machine.formState.removeTodo:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.Todo Machine.loading:invocation[0]": { type: "done.invoke.Todo Machine.loading:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.Todo Machine.markDone:invocation[0]": { type: "done.invoke.Todo Machine.markDone:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.Todo Machine.formState.addTodo:invocation[0]": { type: "error.platform.Todo Machine.formState.addTodo:invocation[0]"; data: unknown };
"error.platform.Todo Machine.formState.removeTodo:invocation[0]": { type: "error.platform.Todo Machine.formState.removeTodo:invocation[0]"; data: unknown };
"error.platform.Todo Machine.loading:invocation[0]": { type: "error.platform.Todo Machine.loading:invocation[0]"; data: unknown };
"error.platform.Todo Machine.markDone:invocation[0]": { type: "error.platform.Todo Machine.markDone:invocation[0]"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "deleteTodo": "done.invoke.Todo Machine.formState.removeTodo:invocation[0]";
"fetchTodos": "done.invoke.Todo Machine.loading:invocation[0]";
"markAsDone": "done.invoke.Todo Machine.markDone:invocation[0]";
"saveTodo": "done.invoke.Todo Machine.formState.addTodo:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "logTodos": "done.invoke.Todo Machine.loading:invocation[0]" | "error.platform.Todo Machine.loading:invocation[0]";
"storeError": "error.platform.Todo Machine.formState.addTodo:invocation[0]" | "error.platform.Todo Machine.formState.removeTodo:invocation[0]" | "error.platform.Todo Machine.loading:invocation[0]" | "error.platform.Todo Machine.markDone:invocation[0]";
"storeFormInput": "onChange";
"storeTodos": "done.invoke.Todo Machine.loading:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "deleteTodo": "delete";
"fetchTodos": "done.invoke.Todo Machine.formState.addTodo:invocation[0]" | "done.invoke.Todo Machine.formState.removeTodo:invocation[0]" | "done.invoke.Todo Machine.markDone:invocation[0]" | "xstate.init";
"markAsDone": "markAsDone";
"saveTodo": "submit";
        };
        matchesStates: "error" | "formState" | "formState.addTodo" | "formState.idle" | "formState.removeTodo" | "loading" | "markDone" | { "formState"?: "addTodo" | "idle" | "removeTodo"; };
        tags: never;
      }
  