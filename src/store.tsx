import { createStore, combineReducers } from "redux";

import stock from "./reducers/stockReducer";

const store = createStore(combineReducers({ stock }));

export default store;
