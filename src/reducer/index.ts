import { combineReducers } from "redux";
import probeReducer from "./probelist";
import customerReducer from "./customerlist";

export default combineReducers({
    probeReducer,
    customerReducer,
})