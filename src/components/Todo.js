import React, { useState } from "react";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../actions/index";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [buttonValue, setbuttonvalue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const List = useSelector((state) => state.ListReducer.list);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleButton = () => {
    setbuttonvalue(!buttonValue);
  };

  const handleCreateTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(createList(inputValue)); 
      setInputValue("");
      setbuttonvalue(false)
    }
  };

  const handleCancelTodo = ()=>{
    setbuttonvalue(false)
  }

  const handlePath = ()=>{
    navigate(`/list-Detail`)
  }
  console.log(List)

  return (
    <div className="task-body">
      <div>
        <div className="new-tabe">
          <button onClick={handleButton}>New List</button>
        </div>
        {buttonValue ? (
          <div className="inp-div">
            <div className="inp-box">
              <p>List Name</p>
              <input
                type="text"
                placeholder="Enter Task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" onClick={handleCancelTodo}>Cancel</button>
              <button type="submit" onClick={handleCreateTodo}>Create List</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div> 

       <div className="multilist">
        {List.map((item, index) => {
          return (
            <div key={index} className="box-list">
              <div className="icons">
                <input type="checkbox" />
              </div>
              <div className="box-task" onClick={handlePath}>
                <p>No task</p>
              </div>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>     
    </div>
  );
}

export default Todo;