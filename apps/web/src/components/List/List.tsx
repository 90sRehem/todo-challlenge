import { ClipboardText, Trash } from 'phosphor-react'
import * as Styles from './List.styles'
import { Checkbox } from '../Checkbox'
import { IconButton } from '../IconButton'

interface Todo {
    id: string
    title: string
    completed: boolean
}

interface ListProps {
    todos: Todo[]
    removeTodo: (id: string) => void;
    markAsDone: (id: string) => void;
}

export function List({ todos, removeTodo, markAsDone }: ListProps) {
    return (
        <Styles.Container>
            <Styles.Summary>
                <strong>
                    Tarefas criadas <Styles.Badge>{todos.length}</Styles.Badge>
                </strong>
                <strong>
                    Concluídas <Styles.Badge>0 de {todos.length}</Styles.Badge>
                </strong>
            </Styles.Summary>
            <Styles.List>
                {todos.length > 0 ? (
                    todos.map((item, index) => (
                        <Styles.Item key={index}>
                            <Checkbox name='checkbox' checked={item.completed} onCheckedChange={() => markAsDone(item.id)} />
                            <label htmlFor="checkbox">{item.title}</label>
                            <IconButton type='button' onClick={() => removeTodo(item.id)} />
                        </Styles.Item>
                    ))
                ) : (
                    <Styles.EmptyList>
                        <ClipboardText />
                        <p>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </Styles.EmptyList>

                )}
            </Styles.List>
        </Styles.Container >
    )
}