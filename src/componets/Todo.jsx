import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../Features/Todo/todoSlice";
function Todo({ Todos }) {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const [todoMsg, setTodoMsg] = useState(Todos.text);
  const edit = () => {
    dispatch(updateTodo({Todos,todoMsg }));
    console.log(Todos.text);
    setIsEditable(false);
  };
  return (
    <div>
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
        readOnly={!isEditable}
      />{" "}
      <button
        onClick={() => {
          dispatch(removeTodo(Todos.id));
        }}
      >
        del
      </button>
      <button
        onClick={() => {
          if (isEditable) edit();
          else setIsEditable((prev) => !prev);
        }}
      >
        update
      </button>
    </div>
  );
}

export default Todo;
