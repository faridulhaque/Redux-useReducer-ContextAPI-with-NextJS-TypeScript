import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import getDataReducer from "../reducers/allDataReducers/getDataReducer";

const rootReducer = combineReducers({
    data: getDataReducer

})


const store = createStore(rootReducer, (applyMiddleware(thunk)));
export default store;