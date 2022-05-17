import axios from "axios";
import{ALL_BOOK_FAIL,ALL_BOOK_SUCCESS,ALL_BOOK_REQUEST,
SINGLE_BOOK_FAIL,SINGLE_BOOK_SUCCESS,SINGLE_BOOK_REQUEST,
  NEW_BOOK_SUCCESS,NEW_BOOK_FAIL,} from '../constants/bookConstants';

export const getBook =() =>
  async (dispatch) => {
    try {
       dispatch({ type: ALL_BOOK_REQUEST });
      const { data } = await axios.get("/api/books");
        // console.log(data)
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
    // console.log("my test" ,id)
  try {
     dispatch({ type:SINGLE_BOOK_REQUEST });
    const { data } = await axios.get(`/api/books/${id}`);
        // console.log("ss",data)
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
  // console.log(productData)
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