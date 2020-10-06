import { ITodos } from '../interfaces'

export const updateTodos = (todos: ITodos[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
