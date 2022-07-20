import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./reducer/rootReducer";

const middleware = [thunk];
const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));