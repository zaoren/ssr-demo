import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const getStore = (preLoadStore) => {
  let store;
  preLoadStore
    ? store = createStore(reducer, preLoadStore, applyMiddleware(thunk))
    : store = createStore(reducer, applyMiddleware(thunk));
    return store
};

export default getStore;
