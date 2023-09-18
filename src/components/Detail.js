import React, { useState } from "react";
import "./Detail.css";
import { useDispatch, useSelector } from "react-redux";
import { arry, deletelist } from "../actions/index";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Detail() {
  const [inputDetail, setInputDetail] = useState("");
  const dispatch = useDispatch();
  const inputList = useSelector((state) => state.ListReducer.arry_push);
  // const [inputDetailArry , setInputArry] = useState([])

  const handleChange = (e) => {
    setInputDetail(e.target.value);
  };
  const handleDelete = (id) => {
    dispatch(deletelist(id));
    console.log("delte buton", id);
  };


  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputDetail.trim() !== "") {
      dispatch(arry(inputDetail));
      setInputDetail("");
    }
  };
  console.log(inputList,"first");
  return (
    <div className="Detail-page">
      <div className="boxex">
        {inputList.map((inp, index) => {
          return (
            <div key={index} className="Accordians">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <input
                      className="input-text"
                      type="text"
                      readOnly
                      value={inp.items}
                      // onClick={(e) => handleEdit(e, index)}
                      // onChange={(e) => handleEdit(e, index)}
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
                        <button onClick={() => handleDelete(inp.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}

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
