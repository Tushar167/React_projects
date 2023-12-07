import reducers from "./reducers";
import { legacy_createStore as createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";


// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(reducers,{}, composeEnhancers(applyMiddleware(thunk)))

export default store