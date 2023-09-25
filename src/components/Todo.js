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
  // const Detail_inputList = useSelector((state) => state.ListReducer.arry_push);
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

                
                <p>No task</p>
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











//  import React, { useState } from "react";
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

//   // const handleCreateTodo = () => {
//   //   if (inputValue.trim() !== "") {
//   //     dispatch(createList(inputValue));
//   //     setInputValue("");
//   //     setbuttonvalue(false);
//   //   }
//   //   console.log("vinay", List);
//   // };

//   const handleCreateTodo = () => {
//     if (inputValue.trim() !== "") {
//       dispatch(createList(inputValue));
//       setInputValue("");
//       setbuttonvalue(false);
//       // const newIndex = List.length;
//       // navigate(`/list-Detail`, { state: newIndex });
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

//  const newIndex = List.length;
//   const handlePath = (newIndex) => {
//     // navigate(`/list-Detail`);
//     // navigate(`/list-Detail`, { state: data });
//     // navigate(`/list-Detail/${data}`);
//     navigate(`/list-Detail`, { state: newIndex });
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
//           // console.log("List", List);
//           return (
//             <div key={list.id} className="box-list">
//               <div className="icons">
//                 <input
//                   type="checkbox"
//                   checked={isChecked[index] || false}
//                   onChange={(index) => toggleCheck(index)}
//                 />
//                 {/* {isChecked[index] ? (
//                   <button onClick={() => deleteTask(index)}>
//                     <DeleteIcon />
//                   </button>
//                 ) : (
//                   ""
//                 )} */}
//               </div>

//               <div className="box-task" onClick={() => handlePath(list.items)}>
//                 <p>No task</p>
//               </div>
//               {/* <div className="box-task" onClick={() => handlePath(list.items)}>
//                 {Detail_inputList.length === 0 ? (
//                   <p>No task</p>
//                 ) : (
//                   Detail_inputList.map((arry) => {
//                     if(arry.count === list.count){
//                       return <p>{arry.lists}</p>;
//                     }
//                     else{<p>No task</p>;}
//                   })
//                 )}
//               </div> */}

//               <h3>{list.name}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Todo;

// import React, { useState } from "react";
// import "./Todo.css";
// import { useDispatch, useSelector } from "react-redux";
// import { createList, deletetask } from "../actions/index";
// import { useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";

// function Todo() {
//   const [buttonValue, setbuttonvalue] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [isChecked, setIsChecked] = useState([]);
//   const List = useSelector((state) => state.ListReducer.list);
//   const Detail_inputList = useSelector((state) => state.ListReducer.arry_push);
//   console.log(Detail_inputList,"todo.js")
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
//       console.log(List,"todo.js")
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

//   const deleteTask = (id) => {
//     dispatch(deletetask(id));
//     setIsChecked((prevChecked) => {
//       const updatedIsChecked = [...prevChecked];
//       updatedIsChecked[id] = false;
//       return updatedIsChecked;
//     });
//     console.log(id, "todo js");
//   };

//   const handlePath = (count) => {
//     navigate(`/list-Detail` , { state: count });
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
//         {List?.map((list, index) => {
//           return (
//             <div key={index} className="box-list">
//               <div className="icons">
//                 <input
//                   type="checkbox"
//                   checked={isChecked[index] || false}
//                   onChange={() => toggleCheck(index)}
//                 />
//                 {isChecked[index] ? (
//                   <button onClick={() => deleteTask(index)}>
//                     <DeleteIcon />
//                   </button>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <div className="box-task" onClick={() => handlePath(list.items)}>
//                 {Detail_inputList.length === 0 ? (
//                   <p>No task</p>
//                 ) : (
//                   Detail_inputList.map((arry) => {
//                     if(arry.count === list.count){
//                       return <p>{arry.items}</p>;
//                     }
//                     else{<p>No task</p>;}
//                   })
//                 )}
//               </div>

//               <h3>{list.data}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Todo;

// import React, { useState } from "react";
// import "./Todo.css";
// import { useDispatch, useSelector } from "react-redux";
// import { createList, deletetask } from "../actions/index";
// import { useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";

// function Todo() {
//   const [buttonValue, setbuttonvalue] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [isChecked, setIsChecked] = useState([]);
//   const List = useSelector((state) => state.ListReducer.list);
//   const Detail_inputList = useSelector((state) => state.ListReducer.arry_push);
//   console.log(Detail_inputList , "todo.js")
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

//   const deleteTask = (id) => {
//     dispatch(deletetask(id));
//     setIsChecked((prevChecked) => {
//       const updatedIsChecked = [...prevChecked];
//       updatedIsChecked[id] = false;
//       return updatedIsChecked;
//     });
//     console.log(id, "todo js");
//   };

//   const handlePath = () => {
//     navigate(`/list-Detail`);
//   };

// // const handleButton = () => {
// //   setbuttonvalue(!buttonValue);
// //   // Initialize the input content for the new card
// //   setCardInputContent((prevContent) => [...prevContent, ""]);
// // };

// // ...

// // Update the input content for a specific card
// // const handleCardInputChange = (index, value) => {
// //   const updatedInputContent = [...cardInputContent];
// //   updatedInputContent[index] = value;
// //   setCardInputContent(updatedInputContent);
// // };

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
//         {List?.map((list, index) => {
//           return (
//             <div key={index} className="box-list">
//               <div className="icons">
//                 <input
//                   type="checkbox"
//                   checked={isChecked[index] || false}
//                   onChange={() => toggleCheck(index)}
//                 />
//                 {isChecked[index] ? (
//                   <button onClick={() => deleteTask(index)}>
//                     <DeleteIcon />
//                   </button>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <div className="box-task" onClick={handlePath}>

//              {/* <p>No task</p>  */}
//                {Detail_inputList.length === 0 ? (
//                   <p>No task</p>
//                 ) : (
//                   Detail_inputList.map((detail) => (
//                     <p key={detail.id}>{detail.items}</p>
//                   ))
//                 )}
//               </div>
//               <h3>{list.data}</h3>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Todo;
