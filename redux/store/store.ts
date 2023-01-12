import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import deleteDataReducer from "../reducers/allDataReducers/deleteDataReducer";
import getDataReducer from "../reducers/allDataReducers/getDataReducer";
import postDataReducer from "../reducers/allDataReducers/postDataReducer";

const rootReducer = combineReducers({
  data: getDataReducer,
  postResponse: postDataReducer,
  deleteItem: deleteDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
