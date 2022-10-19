import Header from "./Header"
import Form from "./Form"
import Counter from "./Counter"
import Todo from "./Todo"

import styles from "./App.module.css"
import { useState } from "react"

export default function App() {

  const [todos, setTodos] = useState([])

  function deleteTodo(todoToDelete) {
    const newTodoValue = todos.filter(todo => {
      return todo.id !== todoToDelete;
    })
    setTodos(newTodoValue)
  }

  function createNewTodo(todo) {
    setTodos((prevState) =>[...prevState, todo])
  }

  function toggleCompletedTodo(id){
    setTodos(prevState => {
      const indexOfTodo = prevState.findIndex(todo => todo.id === id)
      return prevState.map(todo => todo.id === id ? {...todo, completed: !prevState[indexOfTodo].completed} : todo)
    })
  }

  const completedTodos = todos.reduce((acc, todo) => {
    return todo.completed ? acc + 1 : acc;
  }, 0)
  
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          <Form 
            createNewTodo={createNewTodo}
          />
        </main>

        <Counter
          todosCount={todos.length}
          createdTodo={completedTodos}
        />

        <footer>
          {todos.map(todo => {
            return(
              <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={deleteTodo}
              toggleCompletedTodo={toggleCompletedTodo}
              />
            )
          })}
        </footer>
      </div>
    </div>
    
  )
}

