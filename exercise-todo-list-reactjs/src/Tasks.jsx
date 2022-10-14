
import styles from "./Tasks.module.css"

import { Trash } from "phosphor-react"
import Checkbox from "./Checkbox";
import { useState } from "react";

export default function Tasks({content}) {

  const [checked, setChecked] = useState(false);

  return(
    <div className={styles.tasks}>
      <Checkbox isChecked={checked} setChecked={setChecked}/>
      <p className={checked ? styles.contentCompleted : styles.content}>{content}</p>
      <button className="delete">
        <Trash size={20} />
      </button>
    </div>
  )
}