
import "./Checkbox.module.css"

export default function Checkbox ({ isChecked, setChecked }) {

  function isCompletedChange () {
    setChecked(!isChecked)
  }

  return(
    <input type="checkbox" onChange={isCompletedChange}/>
  )
}