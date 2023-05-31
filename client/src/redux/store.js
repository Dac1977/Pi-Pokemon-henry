import { createStore, applyMiddleware } from "redux"; //esta deprecado se aconseja utilizar configureStore
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//const composeEnhancer = window.__REDUX_DEVTOOLS__EXTENSION__COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
