import { createStore } from "redux";
import reducer from "./reducers";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils/localStorage";

const localStorageState = loadFromLocalStorage();

const store = createStore(
  reducer,
  localStorageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;