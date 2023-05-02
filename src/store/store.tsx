import { createStore } from '@reduxjs/toolkit';
import { searchFormReducer } from './reducers';

export const store = createStore(searchFormReducer);
