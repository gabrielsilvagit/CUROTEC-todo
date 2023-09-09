import { cn } from "@/src/lib/cn-merge"
import { useTodoStore } from "@/src/store"
import { Check, CheckFat, Pencil, Trash, X } from "@phosphor-icons/react"
import { useState } from "react"

interface TodoProps {
  task: string
  id: number
  isCompleted: boolean
}

export const Todo = ({ task, id, isCompleted }: TodoProps) => {
  const { deleteTodo, updateTodo, changeStatus } = useTodoStore(
    ({ deleteTodo, updateTodo, changeStatus }) => ({
      deleteTodo,
      updateTodo,
      changeStatus,
    })
  )

  const [isEditing, setIsEditing] = useState(false)
  const [newValue, setNewValue] = useState(task)

  const handleChangeStatus = () => {
    changeStatus(id)
  }

  const handleDelete = () => {
    deleteTodo(id)
  }

  const handleUpdate = () => {
    updateTodo(id, newValue)
    handleEdit()
  }

  const handleEdit = () => {
    setIsEditing((prev) => !prev)
  }

  return (
    <div className="flex flex-row">
      <button
        className={cn(
          `
          group
          flex
          h-12
          appearance-none
          items-center
          justify-start
          gap-4
          rounded-md
          bg-transparent
          px-4
          py-2
          text-gray-300
          transition-colors
          hover:bg-neutral-900
        `,
          isCompleted && "text-gray-500 line-through"
        )}
        role="listitem"
        onClick={handleChangeStatus}
      >
        <span
          className={cn(
            `
              flex
              h-8
              w-8
              min-w-[32px]
              items-center
              justify-center
              rounded-md
              border
              border-gray-400
              `,
            isCompleted && "border-emerald-500 group-hover:border-emerald-400"
          )}
        >
          {isCompleted && (
            <CheckFat
              weight="duotone"
              className={cn(
                `h-5 w-5 text-emerald-500`,
                isCompleted && "group-hover:text-emerald-400"
              )}
            />
          )}
        </span>
      </button>
      {isEditing ? (
        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      ) : (
        <span className="flex w-full items-center justify-start text-white">
          {task}
        </span>
      )}
      <div className="ml-auto flex gap-2">
        {isEditing && (
          <span
            role="button"
            className="flex items-center justify-center rounded-full p-2 hover:bg-neutral-800"
            title="Submit"
            onClick={handleUpdate}
          >
            <Check
              weight="duotone"
              className="h-4 w-4 text-green-800 hover:text-green-600"
              role="img"
              aria-label="Check Icon"
            />
          </span>
        )}
        {!isCompleted && !isEditing && (
          <span
            role="button"
            className="flex items-center justify-center rounded-full p-2 hover:bg-neutral-800"
            title="Edit"
            onClick={handleEdit}
          >
            <Pencil
              weight="duotone"
              className="h-4 w-4 text-sky-800 hover:text-sky-600"
              role="img"
              aria-label="Pencil Icon"
            />
          </span>
        )}
        {isEditing && (
          <span
            role="button"
            className="flex items-center justify-center rounded-full p-2 hover:bg-neutral-800"
            title="Cancel"
            onClick={handleEdit}
          >
            <X
              weight="duotone"
              className="h-4 w-4 text-red-800 hover:text-red-600"
              role="img"
              aria-label="X Icon"
            />
          </span>
        )}
        {!isEditing && (
          <span
            role="button"
            className="flex items-center justify-center rounded-full p-2 hover:bg-neutral-800"
            title="Remove"
            onClick={handleDelete}
          >
            <Trash
              weight="duotone"
              className="h-4 w-4 text-red-800 hover:text-red-600"
              role="img"
              aria-label="Trash Can Icon"
            />
          </span>
        )}
      </div>
    </div>
  )
}
