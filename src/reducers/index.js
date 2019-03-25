import { combineReducers } from "redux";
import sourceReducer from "./sourceReducer";
import serviceReducer from "./serviceReducer";

export default combineReducers({
   sources: sourceReducer,
   services: serviceReducer
});
