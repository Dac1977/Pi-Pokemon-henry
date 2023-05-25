import { createStore, applyMiddleware,compose } from "redux"; //esta deprecado se aconseja utilizar configureStore
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS__EXTENSION__COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;