
import styles from "./Todo.module.css"

import { Trash } from "phosphor-react"
import { useState } from "react";

export default function Todo({content, onDeleteTodo}) {

  const [checked, setChecked] = useState(false);

  function handleDeleteTask (){
    onDeleteTodo(content)
  }

  function isChecked () {
    setChecked(!checked)
  }

  return(
    <div className={styles.tasks}>
      <input type="checkbox" onChange={isChecked}/>
      <p className={checked ? styles.contentCompleted : styles.content}>{content}</p>
      <button onClick={handleDeleteTask} className="delete">
        <Trash size={20} />
      </button>
    </div>
  )
}