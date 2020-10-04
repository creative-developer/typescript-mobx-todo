export interface ITodosBase {
  id: string
  text: string
}

export interface ITodos extends ITodosBase {
  completed: boolean
  isEdit: boolean
}

export interface ITodoFormProps {
  text: string
  cancelBtn?: React.ReactNode
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleAddTodo: () => void
}
