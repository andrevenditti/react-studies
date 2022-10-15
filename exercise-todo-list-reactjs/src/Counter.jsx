
import styles from "./Counter.module.css"

export default function Counter({createdTodo}) {
  return(
    <div className={styles.counter}>
      <div className={styles.tasksCount}>
        <strong>Tarefas criadas</strong>
        <span>{createdTodo}</span>
      </div>
      <div className={styles.tasksCompleted}>
        <strong>Concluídas</strong>
        <span>0 de {createdTodo}</span>
      </div>         
    </div>
  )
}