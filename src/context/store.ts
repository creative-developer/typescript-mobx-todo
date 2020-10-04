import { createContext } from 'react'
import TodoStore from '../store/TodoStore'

export const storeContext = createContext({ TodoStore })
