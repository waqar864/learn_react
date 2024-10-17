import { createContext, useContext } from "react";



export const TodoContext = createContext({
    todos: [
        { id: 1, todo: "Todo 1", completed: false }
    ],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
    
})

export const UseTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider