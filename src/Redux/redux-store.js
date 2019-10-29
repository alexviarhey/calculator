import {combineReducers, createStore} from "redux";
import {displayReducer} from "./display-reducer";


const reducers = combineReducers({
    display: displayReducer
});

let store = createStore(reducers);

export default store

window.store = store;