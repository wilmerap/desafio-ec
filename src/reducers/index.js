import { combineReducers } from "redux";
import suscripcionReducer from "./suscripcionReducer";
import pagoReducer from "./pagoReducer";

export default combineReducers({
    suscripcion: suscripcionReducer,
    datospago: pagoReducer
});