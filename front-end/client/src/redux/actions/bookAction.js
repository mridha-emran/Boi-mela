import axios from "axios";
import{ALL_BOOK_FAIL,ALL_BOOK_SUCCESS,ALL_BOOK_REQUEST,
      SINGLE_BOOK_FAIL,SINGLE_BOOK_SUCCESS,SINGLE_BOOK_REQUEST,
      NEW_BOOK_SUCCESS,NEW_BOOK_FAIL,  
      NEW_REVIEW_REQUEST,NEW_REVIEW_SUCCESS,NEW_REVIEW_FAIL} from '../constants/bookConstants';

export const getBook =(keyword = "",currentPage = 1,category) =>
  async (dispatch) => {
    try {
       dispatch({ type: ALL_BOOK_REQUEST });
        let link = `/api/books?keyword=${keyword}&page=${currentPage}`
        if(category){
             link = `/api/books?keyword=${keyword}&page=${currentPage}&category=${category}`
        }
        const { data } = await axios.get(link);
      dispatch({
        type: ALL_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_BOOK_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getSingleBooks = (id) => async (dispatch) => {
  try {
     dispatch({ type:SINGLE_BOOK_REQUEST });
    const { data } = await axios.get(`/api/books/${id}`);
    dispatch({
      type: SINGLE_BOOK_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_BOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addBook = (productData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/books/new`,
      productData,
    );
    dispatch({
      type: NEW_BOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });  
     const { data } = await axios.put(`/api/reviews`, reviewData);
    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};