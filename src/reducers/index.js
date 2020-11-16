import { combineReducers } from "redux";
import suscripcionReducer from "./suscripcionReducer";

export default combineReducers({
    suscripcion: suscripcionReducer
});