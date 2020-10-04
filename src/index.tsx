import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root'),
)

// "mobx": "^5.15.7",
// "mobx-react": "^6.3.0",
