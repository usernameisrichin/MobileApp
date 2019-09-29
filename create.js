import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import todo_reducer from './reducer';
import login_reducer from './loginReducer';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({ login_reducer,todo_reducer }),
    initialState,
  )
  return store
}