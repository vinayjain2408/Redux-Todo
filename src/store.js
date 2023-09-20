import RootReducer  from './reducers/index';
import {createStore , applyMiddleware  } from "redux";
import ListReducer from './reducers/reducer';
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware()) );

export default store;



// import {createStore , combineReducers, applyMiddleware  } from "redux";
// import ListReducer from './reducers/reducer';
// import { composeWithDevTools } from "@redux-devtools/extension";
// import thunk from "redux-thunk";

// const RootReducer = combineReducers({
//     List:ListReducer
// })
// const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)) );

// export default store;





// import {createStore} from "redux"
// import RootReducer from "./reducers/index"
// import { persistStore , persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"
// // import persistReducer from "redux-persist/es/persistReducer"


// const persistConfig = {
//     key :"persist_key",
//     storage
// }

// const persistedReducer = persistReducer(persistConfig , RootReducer)
// const store = createStore(persistedReducer)
// export const persistor = persistStore(store)

// export default store
