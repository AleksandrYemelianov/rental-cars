import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools  } from "@redux-devtools/extension";
import thunk from 'redux-thunk';
import { rootReducer } from "./index";
// import {
//   persistStore,
//   persistReducer,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'main',
//     storage,
//     whitelist: ['filters'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  // persistedReducer,
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export const persistor = persistStore(store);
