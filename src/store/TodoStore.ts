import { action, computed, makeAutoObservable, observable } from 'mobx'
import { ITodos } from './../interfaces'
import { updateTodos } from '../utils/updateTodos'

const defaultState: ITodos[] = [
  { id: 'todoItem_1601818066904', text: 'Drink coffee...', completed: false, isEdit: false },
]

const getCurrentTodo = (todos: ITodos[], id: string): ITodos => {
  const currentTodoIndex: number = todos.findIndex((todo: ITodos) => todo.id === id)
  return todos[currentTodoIndex]
}

class TodoStore {
  @observable
  todos: ITodos[] = JSON.parse(localStorage.getItem('todos') || JSON.stringify(defaultState))

  constructor() {
    makeAutoObservable(this)
  }

  @computed
  get getUpdatedTodos(): ITodos[] {
    return this.todos
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
    updateTodos(this.getUpdatedTodos)
  }

  @action
  removeTodoItem(id: string): void {
    const filteredTodos: ITodos[] = this.todos.filter((todo) => todo.id !== id)
    this.todos = filteredTodos
    updateTodos(this.getUpdatedTodos)
  }

  @action
  saveTodo(id: string, text: string): void {
    const currentTodo: ITodos = getCurrentTodo(this.todos, id)
    currentTodo.text = text
    updateTodos(this.getUpdatedTodos)
  }

  @action
  changeEditStatus(id: string): void {
    const currentTodo: ITodos = getCurrentTodo(this.todos, id)
    currentTodo.isEdit = !currentTodo.isEdit
    updateTodos(this.getUpdatedTodos)
  }

  @action
  changeCompletedStatus(id: string): void {
    const currentTodo: ITodos = getCurrentTodo(this.todos, id)
    currentTodo.completed = !currentTodo.completed
    updateTodos(this.getUpdatedTodos)
  }
}
export default new TodoStore()
