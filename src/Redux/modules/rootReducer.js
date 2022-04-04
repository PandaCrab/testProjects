import { combineReducers } from "redux";
import stuffReducer from "./stuffReducer";
import appReducer from "./globalReducer";
import dataReducer from "./dataReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    order: stuffReducer,
    data: dataReducer
})
