import { ClipboardText, Trash } from 'phosphor-react'
import * as Styles from './List.styles'
import { Checkbox } from '../Checkbox'
import { IconButton } from '../IconButton'
import { Todo } from '../../types'
import { Input } from '../Input'
import { useRef, useState } from 'react'
import { useEventListener, useOnClickOutside } from '../../hooks'

interface ListProps {
    todos: Todo[]
    removeTodo: (id: string) => void;
    markAsDone: (id: string) => void;
}

export function List({ todos, removeTodo, markAsDone }: ListProps) {
    const [editing, setEditing] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const cardRef = useRef<HTMLDivElement>(null);
    const liRef = useRef<HTMLLIElement>(null);
    const completedTodos = todos.filter(todo => todo.done)

    const handleEdit = (id: string) => {
        setEditing(state => {
            if (state === id) {
                return '';
            }

            return id;
        })
    }

    const handleClickOutside = () => handleEdit(editing);
    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleEdit(editing);
        }
        if (e.key === 'Escape') {
            console.log("🚀 ~ file: List.tsx:42 ~ handleKeyPress ~ e.key === 'Escape'", e.key === 'Escape')
            handleEdit(editing);
        }
    }
    // useEventListener('keyup', handleKeyPress, inputRef);
    // useOnClickOutside(liRef, handleClickOutside)

    return (
        <Styles.Container>
            <Styles.Summary>
                <strong>
                    Tarefas criadas <Styles.Badge>{todos.length}</Styles.Badge>
                </strong>
                <strong>
                    Concluídas <Styles.Badge>{completedTodos.length} de {todos.length}</Styles.Badge>
                </strong>
            </Styles.Summary>
            <Styles.List>
                {todos.length > 0 ? (
                    todos.map((item, index) => (
                        <Styles.Item key={index} ref={liRef}>
                            <Styles.Card >
                                <Checkbox
                                    name='checkbox'
                                    checked={item.done}
                                    onCheckedChange={() => markAsDone(item.id)}
                                />
                                <label
                                    htmlFor="checkbox"
                                    data-checked={item.done}
                                    data-visible={editing === item.id}
                                    // onDoubleClick={() => {
                                    //     handleEdit(item.id);
                                    // }}
                                >
                                    {item.title}
                                </label>
                                {/* <Input

                                    ref={input => input && input.focus()}
                                    data-visible={editing === item.id}
                                    name={'edit'}
                                    placeholder={'Digite o novo título da tarefa'}
                                // value={item.title}
                                defaultValue={item.title}
                                /> */}
                                <IconButton type='button' onClick={() => removeTodo(item.id)} />
                            </Styles.Card>
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