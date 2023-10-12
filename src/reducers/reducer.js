const initialData = {
  list: [],
  selectedColor: "#ffffff",
};

const ListReducer = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      const newList = {
        name: action.payload.name,
        // items: [],
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
      console.log(listIndex);
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

    // case "DELETE_TASK":
    //   const newItems = state.list.receivedData.additionalData.filter((item, index) => index !== action.id);
    //   return {
    //     ...state,
    //     list: newItems,
    //   };

    case "DELETE_TASK":
      const updatedList = state.list.map((item) => {
        if (item.id === 1) {
          // Assuming you want to update the item with id 1.
          const updatedReceivedData = {
            ...item.receivedData,
            additionalData: item.receivedData.additionalData.filter(
              (dataItem) => dataItem.child_id !== action.id
            ),
          };
          return {
            ...item,
            receivedData: updatedReceivedData,
          };
        }
        return item;
      });

      return {
        ...state,
        list: updatedList,
      };

    case "SELECT_PICK":
      return {
        ...state,
        selectedColor: action.payload,
      };
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

//     case "SELECT_PICK":
//       return {
//         ...state,
//         selectedColor: action.payload.color,
//       };
