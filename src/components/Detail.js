import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushToArray } from "../actions/index";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Detail.css";

function Detail() {
  const [inputDetail, setInputDetail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state;

  const dispatch = useDispatch();
  const additionalData = useSelector((state) =>
    state.ListReducer.list.find((list) => list.id === receivedData?.id)
  );

  console.log(additionalData);

  const handleChange = (e) => {
    setInputDetail(e.target.value);
  };  

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputDetail.trim() !== "") {
      const obj = {
        parent_id: receivedData?.id,
        name: inputDetail,
      };
      dispatch(pushToArray(receivedData, obj));
      setInputDetail("");
    }
  };

  const handleChangePath = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="Detail-page">
      <div className="back_path">
        <a href="" onClick={handleChangePath}>
          Back Button
        </a>
      </div>

      <div className="boxex">
        {additionalData && additionalData.receivedData.additionalData.length > 0
          ? additionalData.receivedData.additionalData.map((item, index) => (
              <div key={index} className="Accordions">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography>
                      <input
                        className="input-text"
                        type="text"
                        value={item.name}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="divide">
                      <div className="note">
                        <textarea
                          rows="12"
                          cols="21"
                          defaultValue="Notes"
                        ></textarea>
                      </div>
                      <div>
                        <div className="date">
                          <div>Due Date</div>
                          <button>Today</button>
                          <button>Tomorrow</button>
                        </div>
                        <div className="options">
                          <div>Priority</div>
                          <select>
                            <option value="">None</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>

                          <button >
                            {/* onClick={() => handleDelete(inp.id)}> */}
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))
          : null}

        <div className="List-input">
          <input
            type="text"
            placeholder="New task..."
            value={inputDetail}
            onChange={handleChange}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;








// import React, { useState } from "react";
// import "./Detail.css";
// import { useDispatch, useSelector } from "react-redux";
// import { arry, clearArray, deletelist } from "../actions/index";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// function Detail() {
//   const location = useLocation();
//   const count = location.state;
//   const [inputDetail, setInputDetail] = useState("");
//   // const [inputTarget, setInputTarget] = useState("");

//   const dispatch = useDispatch();
//   const inputList = useSelector((state) => state.ListReducer.arry_push);

//   const handleChange = (e) => {
//     setInputDetail(e.target.value);
//   };
//   const handleDelete = (id) => {
//     dispatch(deletelist(id));
//     console.log("delete buton", id);
//   };

//   const handleInputKeyPress = (e) => {
//     if (e.key === "Enter" && inputDetail.trim() !== "") {
//       dispatch(arry(inputDetail, count));
//       setInputDetail("");
//     }
//     console.log(inputList)
//   };

//   const navigate = useNavigate()

//   const handleChangePath = (e)=>{
//     e.preventDefault()
//     // dispatch(clearArray())
//     navigate("/")
//     console.log(inputList)

//   }

//   return (
//     <div className="Detail-page">
//       <div className="back_path">
//       <a href="" onClick={handleChangePath}>Back Button</a>
//       </div>
//       <div className="boxex">
//         {inputList.map((inp, index) => {
//           return (
//             <div key={inp.count} className="Accordians">
//               <Accordion>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1a-content"
//                   id="panel1a-header"
//                 >
//                   <Typography>
//                     <input
//                       className="input-text"
//                       type="text"
//                       value={inp.items}
//                     />
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <div className="divide">
//                     <div className="note">
//                       <textarea
//                         rows="12"
//                         cols="21"
//                         defaultValue="Notes"
//                       ></textarea>
//                     </div>
//                     <div>
//                       <div className="date">
//                         <div>Due Date</div>
//                         <button>Today</button>
//                         <button>Tomorrow</button>
//                       </div>
//                       <div className="options">
//                         <div>Priority</div>
//                         <select>
//                           <option value="">None</option>
//                           <option value="High">High</option>
//                           <option value="Medium">Medium</option>
//                           <option value="Low">Low</option>
//                         </select>
//                         <button onClick={() => handleDelete(inp.id)}>
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </AccordionDetails>
//               </Accordion>
//             </div>
//           );
//         })}

//         <div className="List-input">
//           <input
//             type="text"
//             placeholder="New task..."
//             value={inputDetail}
//             onChange={handleChange}
//             onKeyPress={handleInputKeyPress}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;

// const handleEdit = (e)=>{
//   setInputTarget(e.target.value)
// }

// const handleEdit = (e, index) => {
//   const updatedInputList = inputList.map((item, i) => {
//     if (i === index) {
//       return e.target.value;
//     }
//     return item;
//   });
//   setInputTarget(updatedInputList);
// };
