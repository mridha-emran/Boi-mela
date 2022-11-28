import React, {useState,useEffect} from "react";
import "./singlePage.css";
import Loader from "../../component/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import Helmet from "react-helmet";
import {getSingleBooks,newReview} from "../../redux/actions/bookAction";
import { Dialog,DialogActions,DialogContent,DialogTitle,Button,} from "@material-ui/core";
import { addItemsToCart } from "../../redux/actions/cartAction";
import { NEW_REVIEW_RESET } from "../../redux/constants/bookConstants";
import ReviewCard from "../../component/ReviewCard/ReviewCard";

const SinglePage = (match) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const { loading,book} = useSelector(
     (state) => state.singleBook
  );

  const { success} = useSelector(
       (state) => state.newReview
  );

  
  const increaseQuantity = () => {
    if (book.stock <= quantity) return;

      const qty = quantity + 1;
      setQuantity(qty);
    };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
      const qty = quantity - 1;
      setQuantity(qty);
    };

    const addToCartHandler = () => {
      dispatch(addItemsToCart(id, quantity));
    // console.log("good")  
    };

    const submitReviewToggle = () => {
      open ? setOpen(false) : setOpen(true);
    };

    const reviewSubmitHandler = () => {
      const myForm = new FormData();
      myForm.set("comment", comment);
      myForm.set("productId",id);
      dispatch(newReview(myForm));
      setOpen(false);
    };
 
  // console.log(book)

  useEffect(() => {
      if (success) {
      alert("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
      dispatch(getSingleBooks(id));
    }, [dispatch,id,success]);
  // console.log("bookss",book)
  return (
      <>
        {loading ? (
        <Loader />
       ) : (
          <>
            <Helmet>
            <title> book details </title>
            </Helmet>
            <div className="ProductDetails">    
            <div className="book">
                {
                  book.bookImages && <img src={book.bookImages[0].url} className="CarouselImage" alt={book.name} />
                }
            
              </div>
              <div>
                <div className="detailsBlock-1">
                  <h2>{book.name}</h2>
                  <p>{book.authour}</p>
                  <p>{book.published}</p>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`₹${book.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button
                      disabled={book.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>

                  <p>
                    Status:
                    <b>
                      {book.stock < 1 ? "Out Of Stock" : "InStock"}
                    </b>
                  </p>
                </div>


                <div className="detailsBlock-4">
                  Description : <p>{book.description}</p>
                </div>
                <button  onClick={submitReviewToggle}className="submitReview">
                   Submit Review
                </button>
              </div>
            </div>
            <h3 className="reviewsHeading">REVIEWS</h3>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={submitReviewToggle}
              >
                <DialogTitle>Submit Review</DialogTitle>
                <DialogContent className="submitDialog">

                  <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </DialogContent>
                <DialogActions>
                  <Button onClick={submitReviewToggle} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={reviewSubmitHandler} color="primary">
                    Submit
                  </Button>
              </DialogActions>
              </Dialog>

                {book.reviews && book.reviews[0] ? (
                <div className="reviews">
                  {book.reviews &&
                  book.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                  ))}
                </div>
              ) : (
                <p className="noReviews">No Reviews Yet</p>
              )}
            </>
          )}
        </>
      )
  
  
};

export default SinglePage;