import { combineReducers } from 'redux';
import BooksReducers from './reducerBooks.js';
import ActiveBook from './reducerActiveBook.js';

const rootReducer = combineReducers({
  books: BooksReducers,
  activeBook: ActiveBook
});

export default rootReducer;
