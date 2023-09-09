import axios from "axios"
import { toast } from "sonner"
import { create } from "zustand"

import { sorter } from "../lib/sorter"

export interface Todo {
  id: number
  task: string
  completed_at: Date | null
}

interface NewTodo extends Todo {}

interface UseTodoStoreProps {
  todos: Todo[]
  error: string
  addTodo: (task: string) => void
  changeStatus: (id: number) => void
  loadTodoList: (todoList: Todo[]) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number, task: string) => void
}

const completedAtSorter = (list: Todo[]) => {
  const completedList = list.filter((item) => item.completed_at !== null)
  const uncompletedList = list.filter((item) => item.completed_at === null)

  const uncompletedListOrdered = sorter({
    list: uncompletedList,
    field: "id",
    order: "desc",
  })
  const completedListOrdered = sorter({
    list: completedList,
    field: "id",
    order: "desc",
  })

  return [...uncompletedListOrdered, ...completedListOrdered]
}

export const useTodoStore = create<UseTodoStoreProps>((set, get) => {
  return {
    todos: [],
    error: "",
    addTodo: async (task: string) => {
      const { todos } = get()

      try {
        const { data } = await axios<NewTodo>({
          method: "post",
          url: "http://localhost:8000/api/todos",
          data: {
            task,
          },
        })
        toast.success("Todo created")
        const newTask: Todo = {
          id: data.id,
          task: data.task,
          completed_at: null,
        }
        set({ todos: completedAtSorter([newTask, ...todos]) })
      } catch (e) {
        set({
          error: "Error trying to create todo",
        })
      }
    },
    changeStatus: async (id: number) => {
      const { todos } = get()
      try {
        const { data } = await axios({
          method: "patch",
          url: `http://localhost:8000/api/todos/${id}`,
        })
        toast.success("Todo updated")
        const newList = todos.filter((todo) => todo.id !== id)
        const list = [...newList, data as Todo]
        set({ todos: completedAtSorter(list) })
      } catch (e) {
        set({
          error: "Error trying to update todo",
        })
      }
    },
    deleteTodo: async (id: number) => {
      const { todos } = get()
      try {
        await axios({
          method: "delete",
          url: `http://localhost:8000/api/todos/${id}`,
        })
        toast.success("Todo deleted")
        set({
          todos: completedAtSorter(todos.filter((todo) => todo.id !== id)),
        })
      } catch (e) {
        set({
          error: "Error trying to update todo",
        })
      }
    },
    updateTodo: async (id: number, task: string) => {
      const { todos } = get()
      try {
        const { data } = await axios({
          method: "put",
          url: `http://localhost:8000/api/todos/${id}`,
          data: {
            task,
          },
        })
        toast.success("Todo updated")
        const newList = todos.filter((todo) => todo.id !== id)
        const list = [...newList, data as Todo]
        set({ todos: completedAtSorter(list) })
      } catch (e) {
        set({
          error: "Error trying to update todo",
        })
      }
    },
    loadTodoList: (todoList: Todo[]) => {
      set({ todos: completedAtSorter(todoList) })
    },
  }
})
