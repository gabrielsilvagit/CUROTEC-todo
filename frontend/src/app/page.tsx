import { notFound } from "next/navigation"
import axios from "axios"

import { ListTodos } from "./components/ListTodos"

const Home = async () => {
  const { data } = await axios.get("http://localhost:8000/api/todos")

  if (!data) {
    return notFound()
  }

  return <ListTodos todoList={data} />
}

export default Home
