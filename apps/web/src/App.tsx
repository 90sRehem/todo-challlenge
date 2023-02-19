import { useMachine } from '@xstate/react';
import { Input, Header, Button, Form, List, Main } from './components'
import { globalStyles } from "./styles/global"
import { todoMachine } from './machines';
import * as Styles from "./App.styles"

function App() {
  globalStyles()
  const [state, send] = useMachine(todoMachine);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    send("submit")
  }

  function handleRemoveTodo(id: string) {
    send({
      type: "delete",
      value: id
    })
  }

  function handleCompleteTodo(id: string) {
    send({
      type: "markAsDone",
      value: id
    })
  }

  return (
    <Styles.Container>
      <Header />
      <Main>
        <Form onSubmit={handleSubmit}>
          <Input
            name='todo'
            placeholder='Add a todo'
            onChange={(e) => {
              send({
                type: "onChange",
                value: e.target.value
              })
            }}
          />
          <Button type='submit'>
            Criar
          </Button>
        </Form>
        <List
          todos={state.context.todos ?? []}
          removeTodo={handleRemoveTodo}
          markAsDone={handleCompleteTodo} />
      </Main>
    </Styles.Container>
  )
}

export default App
