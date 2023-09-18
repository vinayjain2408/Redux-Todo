const initialData = {
  list: [],
  arry_push: [],
};

const ListReducer = (state = initialData, action) => {
    switch (action.type) {
    case "CREATE_LIST":
      // const { data ,count} = action.payload;
      const newList = {
        data : action.payload.data,
        count : state.list.length + 1
      }
      return {
        ...state,
        list: [...state.list, newList],
      };

    case "PUSH_ARRAY":
      const {id, items } = action.payload;
      return {
        ...state,
        arry_push: [
          ...state.arry_push,
          {
            items: items,
            id:id
          },
        ],
      };

    case "DELETE_ARRAY":
      const newArray = state.arry_push.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        arry_push: newArray,
      };


    case "DELETE_TASK":
      const newItems = state.list.filter(
        (item,index) => index !== action.id
      );
      return {
        ...state,
        list: newItems,
      };

    default:
      return state;
  }
};

export default ListReducer;
