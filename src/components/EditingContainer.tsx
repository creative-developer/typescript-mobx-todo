import React, { useEffect, useState } from 'react'

import { useStore } from '../hooks/useStore'
import { ITodoFormProps, ITodos, ITodosBase } from '../interfaces'

import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

import TodoForm from './TodoForm'

const EditingContainer: React.FC<ITodosBase> = ({ id, text }) => {
  const { TodoStore: store } = useStore()
  const [oldTodoText, setOldTodoText] = useState('')

  useEffect(() => {
    const [currentTodoItem]: ITodos[] = store.todos.filter((todo: ITodos) => todo.id === id)
    setOldTodoText(currentTodoItem.text)
  }, [])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    store.saveTodo(id, e.target.value)
  }

  const handleAddTodo = (): void => {
    if (text !== '') {
      store.saveTodo(id, text)
      store.changeEditStatus(id)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleAddTodo()
  }

  const handleCancel = (): void => {
    store.changeEditStatus(id)
    store.saveTodo(id, oldTodoText)
  }

  const cancelBtn: React.ReactNode = (
    <IconButton onClick={handleCancel}>
      <ClearIcon />
    </IconButton>
  )

  const todoFormProps: ITodoFormProps = {
    handleSubmit,
    handleChangeInput,
    handleAddTodo,
    cancelBtn,
    text,
  }

  return <TodoForm {...todoFormProps} />
}

export default EditingContainer
