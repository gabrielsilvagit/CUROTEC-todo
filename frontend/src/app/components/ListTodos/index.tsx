"use client"

import { useTodoStore, type Todo } from "@/src/store"
import { useEffect, type ReactElement } from "react"

import { Input } from "../Input"
import { Todo as TodoComp } from "../Todo"

interface TodoList {
  todoList: Todo[]
}

export const ListTodos = ({ todoList }: TodoList): ReactElement => {
  const { todos, loadTodoList } = useTodoStore(({ todos, loadTodoList }) => ({
    todos,
    loadTodoList,
  }))

  useEffect(() => {
    loadTodoList(todoList)
  }, [loadTodoList, todoList])

  return (
    <main className="mx-auto flex h-full w-[500px] flex-1 flex-col justify-center bg-transparent p-8">
      <Input />
      <div
        className="mt-5 flex h-full w-full flex-col justify-start gap-2"
        role="list"
      >
        {todos?.map(({ task, id, completed_at }) => {
          return (
            <TodoComp
              key={id}
              isCompleted={!!completed_at}
              task={task}
              id={id}
            />
          )
        })}
      </div>
    </main>
  )
}
