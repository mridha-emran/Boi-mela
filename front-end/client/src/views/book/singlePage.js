import React, {useState,useEffect} from "react";
import "./singlePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import {
  getSingleBooks
} from "../../redux/actions/bookAction";

import { addItemsToCart } from "../../redux/actions/cartAction";

const SinglePage = (match) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { book} = useSelector(
    (state) => state.singleBook
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
    console.log("good")
    
  };
 
  // console.log(book)

  useEffect(() => {
    dispatch(getSingleBooks(id));
  }, [dispatch,id]);
  console.log("bookss",book)
  return (
    <>
          <div className="ProductDetails">
            <div>
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
            </div>
          </div>
          
        </>
      )
  
  
};

export default SinglePage;