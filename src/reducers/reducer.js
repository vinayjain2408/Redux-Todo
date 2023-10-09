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
        receivedData: {
          id: state.list.length + 1,
          additionalData: [],
        },
      };
      return {
        ...state,
        list: [...state.list, newList],
      };

    case "PUSH_ARRAY":
      const { receivedData, itemToPush } = action.payload;
      const listIndex = state.list.findIndex(
        (list) => list.id === receivedData.id
      );

      if (listIndex !== -1) {
        const updatedReceivedData = {
          parent_id: receivedData.id,
          additionalData: [
            ...state.list[listIndex].receivedData.additionalData.map(
              (item, index) => ({
                ...item,
                child_id: index + 1,
              })
            ),
            {
              ...itemToPush,
              child_id:
                state.list[listIndex].receivedData.additionalData.length + 1,
            },
          ],
        };

        const updatedLists = [...state.list];
        updatedLists[listIndex] = {
          ...updatedLists[listIndex],
          receivedData: updatedReceivedData,
        };

        return {
          ...state,
          list: updatedLists,
        };
      }
      return state;


    // case "DELETE_ARRAY":
    //   const newArray = state.arry_push.filter((item) => item.id !== action.id);
    //   return {
    //     ...state,
    //     arry_push: newArray,
    //   };

    case "DELETE_ARRAY":
      // Assuming you want to delete a list item by ID
      const idToDelete = action.id;
      return {
        ...state,
        list: state.list.filter((listItem) => listItem.id !== idToDelete),
      };


    default:
      return state;
  }
};

export default ListReducer;
















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
//         data: action.payload.data,
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
