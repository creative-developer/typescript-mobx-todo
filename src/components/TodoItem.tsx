import React from 'react'

import { useStore } from '../hooks/useStore'
import { ITodos } from '../interfaces'

import { createStyles, makeStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import DeleteIcon from '@material-ui/icons/Delete'

const TodoItem: React.FC<ITodos> = ({ id, text, isEdit, completed }: ITodos) => {
  const { TodoStore: store } = useStore()
  const { todoItem, todoItemCompleted } = useStyles()
  const itemClassnames: string = `${todoItem} ${completed ? todoItemCompleted : ''}`

  const handleCompleted = (id: string) => {
    store.changeCompletedStatus(id)
  }
  return (
    <li className={itemClassnames}>
      <FormControlLabel
        value="end"
        control={
          <Checkbox color="default" onChange={() => handleCompleted(id)} checked={completed} />
        }
        label={text}
      />
      <Box>
        <IconButton onClick={() => store.changeEditStatus(id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => store.removeTodoItem(id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </li>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    todoItem: {
      display: 'flex',
      padding: '0.5em 1em',
      fontSize: '1rem',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s',
      alignItems: 'center',
      userSelect: 'none',
      justifyContent: 'space-between',
      listStyleType: 'none',
      backgroundColor: '#fff',
    },
    todoItemCompleted: {
      '& *': {
        color: 'lightgray',
      },
      '& span': {
        textDecoration: 'line-through',
      },
    },
  }),
)

export default TodoItem
