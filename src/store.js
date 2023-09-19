import {createStore} from "redux"
import RootReducer from "./reducers/index"
import { persistStore , persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import persistReducer from "redux-persist/es/persistReducer"


const persistConfig = {
    key :"persist_key",
    storage
}

const persistedReducer = persistReducer(persistConfig , RootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
