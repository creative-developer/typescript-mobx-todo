export interface ITodos {
  id: string
  text: string
  completed: boolean
  isEdit: boolean
}

export interface ITodoFormProps {
  id?: string
  text?: string
  completed?: boolean
  isEdit?: boolean
}
