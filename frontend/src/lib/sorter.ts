export const ORDER_ASC = "asc"
export const ORDER_DESC = "desc"

type OrderProps = "asc" | "desc"
type SorterProps<T = Record<string, any>[]> = {
  list: T[]
  field: string
  compareFunc?: (a: T, b: T, order?: OrderProps) => number
  order?: OrderProps
}

const compare = (a: any, b: any, order: OrderProps) => {
  let var1 = a
  let var2 = b

  if (order === ORDER_DESC) {
    var1 = b
    var2 = a
  }

  if (a === null) {
    return -1
  }
  if (b === null) {
    return 1
  }

  if (var1 > var2) return 1
  if (var1 < var2) return -1
  return 0
}

export const sorter = <T>({
  list,
  field,
  compareFunc,
  order = ORDER_ASC,
}: SorterProps<T>): T[] => {
  return [...list]?.sort((a, b) => {
    if (!compareFunc) {
      return compare(a?.[field], b?.[field], order)
    }
    return compareFunc(a, b, order)
  })
}
