import React, { useState } from "react";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../actions/index";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo() {
  const [buttonValue, setbuttonvalue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  const List = useSelector((state) => state.ListReducer.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButton = () => {
    setbuttonvalue(!buttonValue);
  };

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

  const handlePath = (newIndex, items) => {
    const data = {
      id: newIndex,
      additionalData: items,
    };
    
    navigate(`/list-Detail`, { state: data });
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
        {List.map((list, index) => {
            console.log(list.receivedData.additionalData)
          return (
            <div key={list.id} className="box-list">
              <div className="icons">
                <input
                  type="checkbox"
                  checked={isChecked[index] || false}
                  onChange={(index) => toggleCheck(index)}
                />
              </div>

              <div className="box-task" onClick={() => handlePath(list.id, list.items)} >   
              <p>{list.receivedData.additionalData.length > 0 ? 
              list.receivedData.additionalData.map((name)=>{
                return(
                  <p>{name.name}</p>
                )
              })
              : "No task"}</p>
              </div>

              <h3>{list.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;










// import React, { useState } from "react";
// import "./Todo.css";
// import { useDispatch, useSelector } from "react-redux";
// import { createList } from "../actions/index";
// import { useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";

// function Todo() {
//   const [buttonValue, setbuttonvalue] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [isChecked, setIsChecked] = useState([]);
//   const List = useSelector((state) => state.ListReducer.list);
//   // const Detail_inputList = useSelector((state) => state.ListReducer.arry_push);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleButton = () => {
//     setbuttonvalue(!buttonValue);
//   };

//   const handleCreateTodo = () => {
//     if (inputValue.trim() !== "") {
//       dispatch(createList(inputValue));
//       setInputValue("");
//       setbuttonvalue(false);
//     }
//   };

//   const handleCancelTodo = () => {
//     setbuttonvalue(false);
//   };

//   const toggleCheck = (index) => {
//     const updatedIsChecked = [...isChecked];
//     updatedIsChecked[index] = !updatedIsChecked[index];
//     setIsChecked(updatedIsChecked);
//   };

//   const handlePath = (newIndex, items) => {
//     const data = {
//       id: newIndex,
//       additionalData: items,
//     };
    
//     navigate(`/list-Detail`, { state: data });
//   };

//   return (
//     <div className="task-body">
//       <div>
//         <div className="new-tabe">
//           <button onClick={handleButton}>New List</button>
//         </div>
//         {buttonValue ? (
//           <div className="inp-div">
//             <div className="inp-box">
//               <p>List Name</p>
//               <input
//                 type="text"
//                 placeholder="Enter Task"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//               />
//               <button type="submit" onClick={handleCancelTodo}>
//                 Cancel
//               </button>
//               <button type="submit" onClick={handleCreateTodo}>
//                 Create List
//               </button>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>

//       <div className="multilist">
//         {List.map((list, index) => {
//           return (
//             <div key={list.id} className="box-list">
//               <div className="icons">
//                 <input
//                   type="checkbox"
//                   checked={isChecked[index] || false}
//                   onChange={(index) => toggleCheck(index)}
//                 />
//               </div>

//               <div className="box-task" onClick={() => handlePath(list.id, list.items)} >

                
//                 <p>No task</p>
//               </div>

//               <h3>{list.name}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Todo;




