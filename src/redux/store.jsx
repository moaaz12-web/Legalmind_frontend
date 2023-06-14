import generatedReducer from "./reducers/generatedReducer.js";
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import subscriptionReducer from "./reducers/subscriptionReducer.js";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const middleware = [thunk];

const reducer = combineReducers({
  generated: generatedReducer,
  subscription: subscriptionReducer
  // translated:translatedReducer,
  // docs:docsReducer
});

let store;
if(typeof(Storage) !== "undefined") {
    const persistedState = loadFromLocalStorage();
    store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)));
    store.subscribe(() => saveToLocalStorage(store.getState()));
} else {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
}

export default store;
