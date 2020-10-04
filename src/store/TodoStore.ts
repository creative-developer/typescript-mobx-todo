import { action, makeAutoObservable, observable } from 'mobx'
import { ITodos } from './../interfaces'

const defaultState: ITodos[] = [
  { id: 'todoItem_1601818066904', text: 'Drink coffee...', completed: false, isEdit: false },
]

class TodoStore {
  @observable
  todos: ITodos[] = JSON.parse(localStorage.getItem('todos') || JSON.stringify(defaultState))

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
    this.updateTodos()
  }

  @action
  removeTodoItem(id: string): void {
    const filteredTodos: ITodos[] = this.todos.filter((todo) => todo.id !== id)
    this.todos = filteredTodos
    this.updateTodos()
  }

  @action
  updateTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos))
    window.addEventListener('storage', (e) => {
      this.todos = JSON.parse(localStorage.getItem('todos') || '[]')
    })
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
    this.updateTodos()
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
    this.updateTodos()
  }

  @action
  changeCompletedStatus(id: string): void {
    const changedTodo: ITodos[] = this.todos.map((todo: ITodos) => {
      const text = todo.text
      if (todo.id === id) {
        return { ...todo, text, completed: !todo.completed }
      }
      return todo
    })
    this.todos = changedTodo
    this.updateTodos()
  }
}
export default new TodoStore()
