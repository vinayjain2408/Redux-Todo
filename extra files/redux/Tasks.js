
// Initial state
const initialState = {
    tasks: [],
  };
  
  // Action Types
  const ADD_TASK = 'ADD_TASK';
  const DELETE_TASK = 'DELETE_TASK';
  const TOGGLE_TASK = 'TOGGLE_TASK';
  
  // Action Creators
  export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
  });
  
  export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
  });
  
  export const toggleTask = (taskId) => ({
    type: TOGGLE_TASK,
    payload: taskId,
  });
  
  // Reducer
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  