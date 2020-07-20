import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getApp } from '../utils/localStorage';
import rootReducer from '.';
import { initialState } from './app';

export default () => {
  const localStorageApp = getApp();
  const initialAppState = localStorageApp
    ? { app: localStorageApp }
    : { app: initialState };
  return createStore(rootReducer, initialAppState, composeWithDevTools());
};
