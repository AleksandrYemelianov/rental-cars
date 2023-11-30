import { createStore, applyMiddleware  } from "redux";
import { composeWithDevTools  } from "@redux-devtools/extension";
import { rootReducer } from "./cars/carsReducers";
import thunk from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);