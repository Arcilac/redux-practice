import { createStore, combineReducers } from "redux"
import { useReducer, userReducer } from "./user"
import { ratesReducer } from "./rates"


export const store = createStore(
    combineReducers({
        user: userReducer,
        rates: ratesReducer,
    })
)
