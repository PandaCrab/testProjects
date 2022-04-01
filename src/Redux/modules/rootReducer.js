import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";
import appReducer from "./globalReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    order: stuffReducer
})
