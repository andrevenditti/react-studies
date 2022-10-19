
import styles from "./Todo.module.css"

import { Trash } from "phosphor-react"
import { useState } from "react";

export default function Todo({ toggleCompletedTodo, onDeleteTodo, todo}) {

  function handleDeleteTodo (){
    onDeleteTodo(todo.id)
  }

  function handleClickTodo(id) {
    toggleCompletedTodo(id)
  }  

  return(
    <div className={styles.tasks}>
      <input type="checkbox" onChange={() => handleClickTodo(todo.id)}/>
      <p className={todo.completed ? styles.contentCompleted : styles.content}>{todo.title}</p>
      <button onClick={handleDeleteTodo} className="delete">
        <Trash size={20} />
      </button>
    </div>
  )
}