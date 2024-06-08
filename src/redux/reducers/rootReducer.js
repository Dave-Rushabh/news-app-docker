import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  newsReducer: newsReducer,
});

export default rootReducer;
