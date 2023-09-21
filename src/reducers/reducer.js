// reducers/ListReducer.js
const initialData = {
  list: [],
};


const ListReducer = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      const newList = {
        name: action.payload.name,
        items: [],
        id: state.list.length + 1,
      };
      return {
        ...state,
        list: [...state.list, newList],
      };

    case "PUSH_ARRAY":
      const updatedList = state.list.map((item, index) => {
        if (index === action.payload.index) {
          // If the index matches the one you want to push data into
          return {
            ...item,
            items: [...item.items, action.payload.itemToPush],
          };
        }
        return item;
      });
      return {
        ...state,
        list: updatedList,
      };

    // ... other cases ...

    default:
      return state;
  }
};

export default ListReducer;








// const initialData = {
//   list: [],
//   arry_push: [],
//   selectedColor: null,

// };


// const ListReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "CREATE_LIST":
//       const newList = {
//         name: action.payload.name,
//         items: [],
//         id: state.list.length + 1,
//       };
//       return {
//         ...state,
//         list: [...state.list, newList],
//       };
      
//     case "PUSH_ARRAY":
//       const updatedList = state.list.map((item, index) => {
//         if (index === action.payload.index) {
//           // If the index matches the one you want to push data into
//           return {
//             ...item,
//             items: [...item.items, action.payload.itemToPush],
//           };
//         }
//         return item;
//       });
//       return {
//         ...state,
//         list: updatedList,
//       };



// const ListReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "CREATE_LIST":
//       const newList = {
//         name: action.payload.name, 
//         items: [], 
//         id: state.list.length + 1, 
//       };
//       return {
//         ...state,
//         list: [...state.list, newList],
//       };
   
//     case "PUSH_ARRAY":
//       const newListArry = {
//         count: action.payload.count,
//         items: action.payload.items,
//         indexes: state.list.item.length + 1,
//       };
//       return {
//         ...state,
//         list.items: [...state.list.item, newListArry],
//       };

      
//     case "DELETE_ARRAY":
//       const newArray = state.arry_push.filter((item) => item.id !== action.id);
//       return {
//         ...state,
//         arry_push: newArray,
//       };

//     case "CLEAR_ARRAY":
//       return {
//         ...state,
//         arry_push: [],
//       };

//     case "DELETE_TASK":
//       const newItems = state.list.filter((item, index) => index !== action.id);
//       return {
//         ...state,
//         list: newItems,
//       };

//     case "SELECT_PICK":
//       return {
//         ...state,
//         selectedColor: action.payload.color, 
//       };

//     default:
//       return state;
//   }
// };

// export default ListReducer;










// const initialData = {
//   list: [],
//   arry_push: [],
//   selectedColor: null,
// };

// const ListReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "CREATE_LIST":
//       // const { data ,count} = action.payload;
//       const newList = {
//         data: action.payload.data,
//         count: state.list.length + 1,
//       };
//       return {
//         ...state,
//         list: [...state.list, newList],
//       };

//     case "PUSH_ARRAY":
//       const newListArry = {
//         count: action.payload.count,
//         items: action.payload.items,
//         indexes: state.arry_push.length + 1,
//       };
//       return {
//         ...state,
//         arry_push: [...state.arry_push, newListArry],
//       };

//     case "DELETE_ARRAY":
//       const newArray = state.arry_push.filter((item) => item.id !== action.id);
//       return {
//         ...state,
//         arry_push: newArray,
//       };

//     case "CLEAR_ARRAY":
//       return {
//         ...state,
//         arry_push: [],
//       };

//     case "DELETE_TASK":
//       const newItems = state.list.filter((item, index) => index !== action.id);
//       return {
//         ...state,
//         list: newItems,
//       };

//     case "SELECT_PICK":
//       return {
//         ...state,
//         selectedColor: action.payload.color, // Update the selectedColor in the state
//       };

//     default:
//       return state;
//   }
// };

// export default ListReducer;










// const initialData = {
//   list: [],
//   arry_push: [],
//   selectedColor: null,
// };

// const ListReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "CREATE_LIST":
//       // const { data ,count} = action.payload;
//       const newList = {
//         data: action.payload.data,
//         count: state.list.length + 1,
//       };
//       return {
//         ...state,
//         list: [...state.list, newList],
//       };

//     case "PUSH_ARRAY":
//       const { id, items } = action.payload;
//       return {
//         ...state,
//         arry_push: [
//           ...state.arry_push,
//           {
//             items: items,
//             id: id,
//           },
//         ],
//       };

//     case "DELETE_ARRAY":
//       const newArray = state.arry_push.filter((item) => item.id !== action.id);
//       return {
//         ...state,
//         arry_push: newArray,
//       };

//     case "CLEAR_ARRAY":
//       return {
//         ...state,
//         arry_push: [],
//       };

//     case "DELETE_TASK":
//       const newItems = state.list.filter((item, index) => index !== action.id);
//       return {
//         ...state,
//         list: newItems,
//       };

//     case "SELECT_PICK":
//       return {
//         ...state,
//         selectedColor: action.payload.color, // Update the selectedColor in the state
//       };

//     default:
//       return state;
//   }
// };

// export default ListReducer;
