import React, { useEffect, useState } from 'react'

import { useStore } from '../hooks/useStore'
import { ITodos } from '../interfaces'

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import Box from '@material-ui/core/Box'
import DoneIcon from '@material-ui/icons/Done'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const EditingForm: React.FC<ITodos> = ({ id, text, completed, isEdit }) => {
  const { TodoStore: store } = useStore()
  const classes = useStyles()
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
          value={text}
        />
        <Box>
          <IconButton onClick={handleAddTodo}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={handleCancel}>
            <ClearIcon />
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

export default EditingForm
