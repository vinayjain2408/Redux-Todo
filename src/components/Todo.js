import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleRemoveTodo = () =>{
    dispatch(removeTodo())
  }

  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit" onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <ul>
          {list.map((elem, index) => (
            <li key={index}>{elem.data}
             <button onClick={() => handleDeleteTodo(elem.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <div>
        <button onClick={() => handleRemoveTodo()}>remove</button>
            
        </div>
      </div>
    </>
  );
}

export default Todo;

