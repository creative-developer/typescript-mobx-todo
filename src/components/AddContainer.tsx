import React, { useState } from 'react'

import { useStore } from '../hooks/useStore'
import { ITodoFormProps } from '../interfaces'
import TodoForm from './TodoForm'

const AddContainer: React.FC = () => {
  const { TodoStore: store } = useStore()
  const [todoText, setTodoText] = useState('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(e.target.value)
  }

  const handleAddTodo = (): void => {
    if (todoText !== '') {
      store.addTodo(todoText)
      setTodoText('')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleAddTodo()
  }

  const todoFormProps: ITodoFormProps = {
    handleSubmit,
    handleChangeInput,
    handleAddTodo,
    text: todoText,
  }

  return <TodoForm {...todoFormProps} />
}

export default AddContainer
