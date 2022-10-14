import Header from "./Header"
import Form from "./Form"
import Counter from "./Counter"
import Tasks from "./Tasks"

import styles from "./App.module.css"
import { useState } from "react"

import {v4 as uuidv4} from "uuid"


export default function App() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          <Form 
            tasks={tasks}
            tasksList={setTasks}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </main>
        <Counter />

        <footer>
          {tasks.map(task => {
            return(
              <Tasks
                key={uuidv4()}
                content={task}
              />
            )
          })}
        </footer>
      </div>
    </div>
    
  )
}

