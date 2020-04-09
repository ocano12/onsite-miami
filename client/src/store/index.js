import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signUp from './reducers/signup';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [thunk];

const composedMiddleWare = applyMiddleware(...middleWare);

const reducers = combineReducers({
  signUp,
});

const store = createStore(reducers, composeWithDevTools(composedMiddleWare));

export default store;
