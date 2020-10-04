import React, { useEffect } from 'react'

import { useStore } from '../hooks/useStore'
import { observer } from 'mobx-react'

import { ITodos, ITodosBase } from '../interfaces'

import { createStyles, makeStyles } from '@material-ui/core'

import TodoItem from './TodoItem'
import EditingContainer from './EditingContainer'

const TodosList: React.FC = observer(() => {
  const { TodoStore: store } = useStore()
  const classes = useStyles()

  return (
    <ul className={classes.todoList}>
      {store.todos.map((todo: ITodos) => {
        const { id, text }: ITodosBase = todo
        const editingFormProps: ITodosBase = { id, text }
        return todo.isEdit ? (
          <EditingContainer key={id} {...editingFormProps} />
        ) : (
          <TodoItem key={id} {...todo} />
        )
      })}
    </ul>
  )
})

const useStyles = makeStyles(() =>
  createStyles({
    todoList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
  }),
)

export default TodosList
