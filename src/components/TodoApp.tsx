import React from 'react'

import { observer } from 'mobx-react'
import { configure } from 'mobx'

import { Container } from '@material-ui/core'

import Header from './Header'
import TodoForm from './TodoForm'
import TodosList from './TodosList'

configure({ enforceActions: 'observed' })

const TodoApp: React.FC = observer(() => {
  return (
    <div className="TodoApp">
      <Header />
      <Container maxWidth="md">
        <TodosList />
        <TodoForm />
      </Container>
    </div>
  )
})

export default TodoApp
