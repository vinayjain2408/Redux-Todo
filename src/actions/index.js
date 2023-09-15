export const createList = (data) =>{
    return {
        type : "CREATE_LIST" , 
        payload : {
            data : data
        }
    }
}
export const arry = (items) =>{
    return {
        type : "PUSH_ARRAY",
        payload : {
            items : items
        }
    }
}
// export const deletelist = (id) =>{
//     return {
//         type : "DELETE_ARRAY",
//         id,
//     }
// }

// export const deletelist = (id) => {
//     return {
//       type: "DELETE_ARRAY", // Use the appropriate action type
//       id, // Ensure that you include the id in the action payload
//     };
//   };


export const deletelist = (index) => {
    return {
      type: "DELETE_ARRAY",
      index, // Pass the index to the reducer
    };
  };
  
