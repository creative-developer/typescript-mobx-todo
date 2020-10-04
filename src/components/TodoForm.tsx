import React from 'react'

import { ITodoFormProps } from '../interfaces'

import { createStyles, makeStyles, Theme } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import DoneIcon from '@material-ui/icons/Done'

const TodoForm: React.FC<ITodoFormProps> = (props) => {
  const { handleAddTodo, handleChangeInput, handleSubmit, cancelBtn, text }: ITodoFormProps = props
  const classes = useStyles()

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.todoContainer}>
        <TextField
          className={classes.root}
          placeholder="Сходить в магазин..."
          size="medium"
          onChange={handleChangeInput}
          value={text}
        />
        <Box>
          <IconButton onClick={handleAddTodo}>
            <DoneIcon />
          </IconButton>
          {cancelBtn && cancelBtn}
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
