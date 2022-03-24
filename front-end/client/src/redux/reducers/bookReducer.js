import{ALL_BOOK_FAIL,ALL_BOOK_SUCCESS,
 SINGLE_BOOK_FAIL,SINGLE_BOOK_SUCCESS,
NEW_BOOK_FAIL,NEW_BOOK_SUCCESS,NEW_BOOK_RESET} from '../constants/bookConstants'
export const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case ALL_BOOK_SUCCESS:
      return {      
        books: action.payload.books,
    
      };

    case ALL_BOOK_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleBookReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case SINGLE_BOOK_SUCCESS:
      return {
        book: action.payload,
      };
    case SINGLE_BOOK_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export const addBooktReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case NEW_BOOK_SUCCESS:
      return {
        success: action.payload.success,
        book: action.payload.book,
      };
    case NEW_BOOK_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case NEW_BOOK_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};