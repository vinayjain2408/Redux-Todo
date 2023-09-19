import React, { useState } from "react";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { createList, deletetask } from "../actions/index";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const [buttonValue, setbuttonvalue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  const [cardInputContent, setCardInputContent] = useState([]);
  const List = useSelector((state) => state.ListReducer.list);
  const Detail_inputList = useSelector((state) => state.ListReducer.arry_push);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleButton = () => {
  //   setbuttonvalue(!buttonValue);
  // };

  const handleCreateTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(createList(inputValue));
      setInputValue("");
      setbuttonvalue(false);
    }
  };

  const handleCancelTodo = () => {
    setbuttonvalue(false);
  };

  const toggleCheck = (index) => {
    const updatedIsChecked = [...isChecked];
    updatedIsChecked[index] = !updatedIsChecked[index];
    setIsChecked(updatedIsChecked);
  };

  const deleteTask = (id) => {
    dispatch(deletetask(id));
    setIsChecked((prevChecked) => {
      const updatedIsChecked = [...prevChecked];
      updatedIsChecked[id] = false;
      return updatedIsChecked;
    });
    console.log(id, "todo js");
  };

  const handlePath = () => {
    navigate(`/list-Detail`);
  };
  const handleButton = () => {
    setbuttonvalue(!buttonValue);
    // Initialize the input content for the new card
    setCardInputContent((prevContent) => [...prevContent, ""]);
  };

  // ...

  // Update the input content for a specific card
  const handleCardInputChange = (index, value) => {
    const updatedInputContent = [...cardInputContent];
    updatedInputContent[index] = value;
    setCardInputContent(updatedInputContent);
  };

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
              <button type="submit" onClick={handleCancelTodo}>
                Cancel
              </button>
              <button type="submit" onClick={handleCreateTodo}>
                Create List
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="multilist">
        {List.map((item, index) => {
          // const detailsForCurrentList = Detail_inputList.filter(
          //   (detail) => detail.listId === item.id
          // );
          
          return (
            <div key={index} className="box-list">
              <div className="icons">
                <input
                  type="checkbox"
                  checked={isChecked[index] || false}
                  onChange={() => toggleCheck(index)}
                />
                {isChecked[index] ? (
                  <button onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </button>
                ) : (
                  ""
                )}
              </div>

              <div className="box-task" onClick={handlePath}>
                {Detail_inputList.length === 0 ? (
                  <p>No task</p>
                ) : (
                  // Display the input content specific to the current card
                  <p>{cardInputContent[index]}</p>
                )}
              </div>

              <h3>{item.data}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
