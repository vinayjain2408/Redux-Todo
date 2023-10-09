export const createList = (name) => {
  return {
    type: "CREATE_LIST",
    payload: {
      name: name,
      // data
    },
  };
};


export const pushToArray = (receivedData, itemToPush) => {
  return {
    type: "PUSH_ARRAY",
    payload: {
      receivedData: receivedData,
      itemToPush: itemToPush, 
    },
  };
};


export const deletelist = (id) => {
  return {
    type: "DELETE_ARRAY",
    id,
  };
};







// export const deletetask = (id) =>{
//   return {
//     type: "DELETE_TASK",
//     id,
//   };
// };

// export const selectColor = (color) => {
//   return {
//     type: "SELECT_PICK",
//     payload: { color },
//   };
// };


// export const clearArray = () => ({
//   type:  "CLEAR_ARRAY",
// });











// export const createList = (data) => {
//   return {
//     type: "CREATE_LIST",
//     payload: {
//       data: data,
//       // data
//     },
//   };
// };
// export const arry = (items,data) => {
//   return {
//     type: "PUSH_ARRAY",
//     payload: {
//       // items: items,
//       data,
//       items,
//       id: new Date().getTime().toString(),
//     },
//   };
// };
// export const deletelist = (id) => {
//   return {
//     type: "DELETE_ARRAY",
//     id,
//   };
// };

// export const deletetask = (id) =>{
//   return {
//     type: "DELETE_TASK",
//     id,
//   };
// };

// export const selectColor = (color) => {
//   return {
//     type: "SELECT_PICK",
//     payload: { color },
//   };
// };


// export const clearArray = () => ({
//   type:  "CLEAR_ARRAY",
// });

