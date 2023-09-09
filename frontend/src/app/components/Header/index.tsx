"use client"

import { useTodoStore } from "@/src/store"
import { type ReactElement } from "react"

export function Header(): ReactElement {
  const { todos } = useTodoStore(({ todos }) => ({ todos }))

  return (
    <div className="flex h-14 flex-1 flex-row items-center justify-center bg-gray-900">
      <h1 className="flex items-center gap-2 text-2xl text-white">
        Tasks
        <small>({todos.length})</small>
      </h1>
    </div>
  )
}
