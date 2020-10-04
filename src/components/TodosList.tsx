import React from 'react'

import { useStore } from '../hooks/useStore'
import { createStyles, makeStyles } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { ITodos } from '../interfaces'
import TodoItem from './TodoItem'
// import TodoForm from './TodoForm'
import EditingForm from './EditingForm'

const TodosList: React.FC = observer(() => {
  const { TodoStore: store } = useStore()
  const classes = useStyles()

  return (
    <ul className={classes.todoList}>
      {store.todos.map(({ id, text, isEdit, completed }: ITodos) =>
        isEdit ? (
          <EditingForm key={id} id={id} text={text} isEdit={isEdit} completed={completed} />
        ) : (
          <TodoItem key={id} id={id} isEdit={isEdit} completed={completed} text={text} />
        ),
      )}
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
