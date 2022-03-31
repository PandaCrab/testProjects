import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";

export const rootReducer = combineReducers({
    order: stuffReducer,
})
