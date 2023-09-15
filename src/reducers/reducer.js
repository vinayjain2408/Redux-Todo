const initialData = {
  list: [],
  arry_push: [],
};

const ListReducer = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      const { data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
          },
        ],
      };

    case "PUSH_ARRAY":
      const { items } = action.payload;
      return {
        ...state,
        arry_push: [
          ...state.arry_push,
          {
            items: items,
          },
        ],
      };

    // case "DELETE_ARRAY":
    //   const newArray = state.arry_push.filter(
    //     (item) => item.items.id !== action.id
    //   );
    //   return {
    //     ...state,
    //     arry_push: newArray,
    //   };

    case "DELETE_ARRAY":
      const updatedArray = [...state.arry_push];
      updatedArray.splice(action.index, 1); // Remove the item at the specified index
      return {
        ...state,
        arry_push: updatedArray,
      };

    default:
      return state;
  }
};

export default ListReducer;
