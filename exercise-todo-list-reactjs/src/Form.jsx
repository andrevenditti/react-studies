import { PlusCircle } from "phosphor-react"
import { useState } from "react"
import styles from "./Form.module.css"

export default function Form({tasks, tasksList, newTask, setNewTask}){

  function handleCreateNewTask (event){
    event.preventDefault();
    tasksList([...tasks, newTask])
    setNewTask("")
  }

  function handleNewTaskChange(event) {
    setNewTask(event.target.value)
  }

  return(
    <form onSubmit={handleCreateNewTask}>
      <input 
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa" 
        value={newTask}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit" title="Adicionar tarefa">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}