import{ALL_BOOK_FAIL,ALL_BOOK_SUCCESS,
 SINGLE_BOOK_FAIL,SINGLE_BOOK_SUCCESS} from '../constants/bookConstants'
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
        loading: false,
        book: action.payload,
      };
    case SINGLE_BOOK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
