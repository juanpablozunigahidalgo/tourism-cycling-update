import { createStore } from 'redux';
import { searchFormReducer } from './reducers';

export const store = createStore(searchFormReducer);
