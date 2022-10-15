import { PlusCircle } from "phosphor-react"
import { useState } from "react"
import styles from "./Form.module.css"

export default function Form({todo, todoList, newTodo, setNewTodo}){

  function handleCreateNewTask (event){
    
    event.preventDefault();
    todoList([...todo, newTodo])
    setNewTodo("")
  }

  function handleNewTaskChange(event) {
    setNewTodo(event.target.value)
  }

  return(
    <form onSubmit={handleCreateNewTask}>
      <input 
        type="text"
        name="todoInput"
        placeholder="Adicione uma nova tarefa" 
        value={newTodo}
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