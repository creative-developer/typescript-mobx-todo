import React, { useState } from 'react'

import { useStore } from '../hooks/useStore'

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import DoneIcon from '@material-ui/icons/Done'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const TodoForm: React.FC = () => {
  const { TodoStore: store } = useStore()
  const classes = useStyles()
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

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.todoContainer}>
        <TextField
          className={classes.root}
          required
          id="standard-required"
          placeholder="Сходить в магазин..."
          size="medium"
          onChange={handleChangeInput}
          value={todoText}
        />
        <Box>
          <IconButton onClick={handleAddTodo}>
            <DoneIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginRight: theme.spacing(1),
    },
    todoContainer: {
      background: '#fff',
      padding: '8px 1em',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    },
  }),
)

export default TodoForm
