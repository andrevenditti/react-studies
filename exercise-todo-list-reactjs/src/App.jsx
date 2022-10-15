import Header from "./Header"
import Form from "./Form"
import Counter from "./Counter"
import Todo from "./Todo"

import styles from "./App.module.css"
import { useState } from "react"

import { v4 as uuidv4} from "uuid"


export default function App() {

  const [todo, setTodos] = useState([])

  const [newTodo, setNewTodo] = useState('')

  function deleteTodo(todoToDelete) {
    const newTodoValue = todo.filter(todo => {
      return todo !== todoToDelete;
    })
    setTodos(newTodoValue)
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          <Form 
            todo={todo}
            todoList={setTodos}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
        </main>

        <Counter
          createdTodo={todo.length}
        />

        <footer>
          {todo.map(todo => {
            return(
              <Todo
                key={uuidv4()}
                content={todo}
                todo={todo}
                onDeleteTodo={deleteTodo}
              />
            )
          })}
        </footer>
      </div>
    </div>
    
  )
}

