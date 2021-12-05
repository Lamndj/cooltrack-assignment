import { combineReducers } from "redux";
import { chartReducer } from "./chart";

export default combineReducers({
  chartData: chartReducer,
});
