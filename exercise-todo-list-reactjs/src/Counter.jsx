
import styles from "./Counter.module.css"

export default function Counter() {
  return(
    <div className={styles.counter}>
      <div className={styles.tasksCount}>
        <strong>Tarefas criadas</strong>
        <span>0</span>
      </div>
      <div className={styles.tasksCompleted}>
        <strong>Concluídas</strong>
        <span>0 de 1</span>
      </div>         
    </div>
  )
}