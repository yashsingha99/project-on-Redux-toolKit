import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from './Features/Todo/todoSlice'
import './App.css'
import Todo from './componets/Todo'
import AddTodo from './componets/addTodo'
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos) // isske callback bydefault state se excess rkhta hai
  // const [todos, setTodos] = useState(fetchTodos)
  useEffect(() => {
    const todos1 = JSON.parse(localStorage.getItem("todos"))
    if (todos1 && todos1.length > 0) {
      dispatch(update(todos1)) // ye state mai data ko localstorage mai se lekr fir se assign kr dega...
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))  // state mai ya data mai koi bhi changes honge voh localStorage mai reassign kr denge...
  }, [todos])

  return (
   <>
    <h1>Redux toolkit</h1>
    <AddTodo/>
    {todos.map((todo) => (
       <div key={todo.id}> 
       <Todo Todos={todo} />
       </div>
    ))}
   </>
  )
}

export default App
