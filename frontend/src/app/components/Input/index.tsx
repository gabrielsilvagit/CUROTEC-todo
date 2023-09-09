"use client"

import { useTodoStore } from "@/src/store"
import { useState, type ChangeEvent, type ReactElement } from "react"

export function Input(): ReactElement {
  const { addTodo } = useTodoStore(({ addTodo }) => ({ addTodo }))
  const [value, setValue] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleNewTodo = () => {
    addTodo(value)
    setValue("")
  }

  return (
    <div className="flex w-full items-center rounded-lg bg-gray-800 px-8 py-4">
      <div className="flex h-10 w-full flex-row items-center gap-4 rounded-md bg-gray-400">
        <input
          autoFocus
          className="flex h-full flex-1 appearance-none bg-transparent pl-4 text-gray-900 outline-none"
          value={value}
          onChange={handleChange}
        />
        <button
          className="flex h-full appearance-none items-center rounded-r-md bg-gray-600 px-2 outline-none transition-colors focus-visible:bg-gray-700 enabled:hover:bg-gray-700"
          onClick={handleNewTodo}
        >
          Add
        </button>
      </div>
    </div>
  )
}
