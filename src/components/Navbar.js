import React, { useState } from "react";
import "./Navbar.css";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { selectColor } from "../actions/index";

function Navbar() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.selectedColor);

  const handleColorChange = (newColor) => {
    dispatch(selectColor(newColor));
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const appStyle = {
    backgroundColor: selectedColor,
  };

  return (
    <div className="head" style={appStyle}>
      <h2>Todo List</h2>
      <p>
        <a href="#" onClick={toggleColorPicker}>
          <ColorLensIcon />
        </a>
        {showColorPicker && (
          <span className="color-sheet">
            <ChromePicker
              color={selectedColor}
              onChangeComplete={(color) => handleColorChange(color.hex)}
            />
          </span>
        )}
      </p>
    </div>
  );
}

export default Navbar;






// import React, { useState } from "react";
// import "./Navbar.css";
// // import { ChromePicker } from "react-color";
// import { SketchPicker } from 'react-color'
// import { useDispatch, useSelector } from "react-redux";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import { selectColor } from "../actions/index";

// function Navbar() {
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   const ChooseColor = useSelector((state) => state.selectedColor);

//   const ColorChangeHandler = (newColor) => {
//     dispatch(selectColor(newColor));
//   };

//   const handleColorToggle = (e) => {
//     e.preventDefault();
//     setShow(!show);
//   };
//   const appStyle = {
//     backgroundColor: ChooseColor,
//   };

//   return (
//     <div className="head" style={appStyle}>
//       <h2>Todo List</h2>
//       <div>
//         <a href="" onClick={handleColorToggle}>
//           <ColorLensIcon />
//         </a>
//         {show ? (
//           <span className="color-sheet">
//             <SketchPicker
//               color={ChooseColor}
//               onChangeComplete={(color) => ColorChangeHandler(color.hex)}
//             />
//           </span>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;






// import React, { useState } from "react";
// import "./Navbar.css";
// import { ChromePicker } from "react-color";
// import { useDispatch, useSelector } from "react-redux";
// import ColorLensIcon from '@mui/icons-material/ColorLens'
// import { selectColor } from "../actions/index";

// function Navbar() {
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   const ChooseColor = useSelector((state) => state.selectedColor);

//   const ColorChangeHandler = (newColor) => {
//     dispatch(selectColor(newColor));
//   };

//   const handleColorToggle = (e) => {
//     e.preventDefault();
//     setShow(!show);
//   };

//   const appStyle = {
//     backgroundColor: ChooseColor,
//   };

//   return (
//     <div className="head" style={appStyle}>
//       <h2>Todo List</h2>

//       <p>
//         <a href='' onClick={handleColorToggle}>
//           <ColorLensIcon />
//         </a>
//         {show ? (
//           <span className="color-sheet">
//             <ChromePicker
//               color={ChooseColor}
//               onChangeComplete={(color) => ColorChangeHandler(color.hex)}
//             />
//           </span>
//         ) : (
//           ""
//         )}
//       </p>
//     </div>
//   );
// }

// export default Navbar;

