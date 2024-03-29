import{ALL_BOOK_FAIL,ALL_BOOK_SUCCESS,ALL_BOOK_REQUEST,
    SINGLE_BOOK_FAIL,SINGLE_BOOK_SUCCESS,SINGLE_BOOK_REQUEST,
    NEW_BOOK_FAIL,NEW_BOOK_SUCCESS,NEW_BOOK_RESET,
    NEW_REVIEW_REQUEST,NEW_REVIEW_SUCCESS,NEW_REVIEW_FAIL,NEW_REVIEW_RESET} from '../constants/bookConstants'

export const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {

    case ALL_BOOK_REQUEST:
      return {
        loading: true,
        books: [],
      }
    case ALL_BOOK_SUCCESS:
      return { 
        loading: false,     
        books: action.payload.books,
        resultPerPage: action.payload.resultPerPage,
        productsCount: action.payload.productsCount,
      };
    case ALL_BOOK_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleBookReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case SINGLE_BOOK_REQUEST:
      return {
        loading: true,
        ...state,
      }
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

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
}