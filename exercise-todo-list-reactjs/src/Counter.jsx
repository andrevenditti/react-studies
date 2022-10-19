
import styles from "./Counter.module.css"

export default function Counter({createdTodo, todosCount}) {
  
  return(
    <div className={styles.counter}>
      <div className={styles.tasksCount}>
        <strong>Tarefas criadas</strong>
        <span>{todosCount}</span>
      </div>
      <div className={styles.tasksCompleted}>
        <strong>Concluídas</strong>
        <span>{createdTodo} de {todosCount}</span>
      </div>         
    </div>
  )
}