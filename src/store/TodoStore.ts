import { action, makeAutoObservable, observable } from 'mobx'
import { ITodos } from './../interfaces'

export class TodoStore {
  @observable todos: ITodos[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  addTodo(text: string): void {
    const newTodo: ITodos = {
      id: `todoItem_${Date.now()}`,
      text,
      completed: false,
      isEdit: false,
    }
    this.todos.push(newTodo)
  }
  @action
  saveTodo(id: string, text: string): void {
    const changeTextTodo: ITodos[] = this.todos.map((todo: ITodos) => {
      if (todo.id === id) {
        return { ...todo, text }
      }
      return todo
    })
    this.todos = changeTextTodo
  }

  @action
  changeEditStatus(id: string): void {
    const changedTodo: ITodos[] = this.todos.map((todo: ITodos) => {
      const text = todo.text
      if (todo.id === id) {
        return { ...todo, text, isEdit: !todo.isEdit }
      }
      return todo
    })
    this.todos = changedTodo
  }

  @action
  removeTodoItem(id: string): void {
    const filteredTodos: ITodos[] = this.todos.filter((todo) => todo.id !== id)
    this.todos = filteredTodos
  }
}
