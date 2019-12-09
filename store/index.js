import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/api/index";
// import thunk from 'redux-thunk'

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, applyMiddleware(thunk));
export default createStore(rootReducer);
//export default store;