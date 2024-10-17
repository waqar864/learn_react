import { useEffect, useState } from "react"
import { Todoprovider } from "./contexts"
import { TodoForm, TodoItem } from "./components"


function App() {

  const [todos, setTodos] = useState([
    { id: 1, todo: "Todo 1", completed: false }
  ])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t, ...todo} : t))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t, completed: !t.completed} : t))
  }

  useEffect(() => { 
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
      console.log(todos)
  },[])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])  

  return (
    <Todoprovider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo} />

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
