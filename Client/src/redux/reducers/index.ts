import { combineReducers } from "redux";

import blogReducer from "./blogReducer";


const reducers = combineReducers({
  blogReducer: blogReducer
})


export default reducers;