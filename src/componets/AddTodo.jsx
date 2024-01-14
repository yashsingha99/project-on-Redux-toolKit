import {React, useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/Todo/todoSlice'
function AddTodo() {
    const dispatch = useDispatch();
    const [Input, setInput] = useState("")
    const add = (e)=>{
       e.preventDefault()
       if(!Input) return
       dispatch(addTodo(Input))
       setInput("")
    }
  return (
    <div>
        <form onSubmit={add}>
            <input 
             type="text"
             placeholder='Enter todos'
             value={Input}
             onChange={(e)=>setInput(e.target.value)}
             />
             <button 
             type='submit'
             >Add</button>
        </form>
    </div>
  )
}

export default AddTodo