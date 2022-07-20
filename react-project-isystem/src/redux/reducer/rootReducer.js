import {combineReducers} from 'redux';
import {windowReducer} from "./windowReducer";

export const rootReducer = combineReducers({
    windowReducer: windowReducer, //bu entertainmentReducerni ozgaruvchiga olvoladi
})