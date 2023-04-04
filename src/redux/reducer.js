import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducers";
import { sumReducer } from "./reducers/sumReducer";

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    sumReducer: sumReducer
})