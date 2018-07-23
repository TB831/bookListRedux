import { combineReducers } from 'redux';
import BooksReducers from './reducerBooks.js';

const rootReducer = combineReducers({
  books: BooksReducers
});

export default rootReducer;
