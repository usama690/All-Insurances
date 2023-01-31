import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import insurance from "./insurance";

export default combineReducers({ alert, auth, insurance });
