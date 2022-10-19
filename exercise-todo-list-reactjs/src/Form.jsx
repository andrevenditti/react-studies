import { PlusCircle } from "phosphor-react"
import { useState } from "react"
import { v4 as uuidv4, v4} from "uuid"
import "./Form.module.css"

export default function Form({createNewTodo}){
  
  const [newTodo, setNewTodo] = useState('')

  function handleCreateNewTodo (event){
    event.preventDefault();
    createNewTodo({id: uuidv4(), title: newTodo, completed: false})
    setNewTodo("")
  }
  
  function handleNewTodoChange(event) {
    setNewTodo(event.target.value)
  }

  return(
    <form onSubmit={handleCreateNewTodo}>
      <input 
        type="text"
        name="todoInput"
        placeholder="Adicione uma nova tarefa" 
        value={newTodo}
        onChange={handleNewTodoChange}
        required
      />
      <button type="submit" title="Adicionar tarefa">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}