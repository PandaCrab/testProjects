import { combineReducers } from "redux";

import stuffReducer from "./ducks/stuff";
import dataReducer from "./ducks/data";

export const rootReducer = combineReducers({
    order: stuffReducer,
    data: dataReducer
})
