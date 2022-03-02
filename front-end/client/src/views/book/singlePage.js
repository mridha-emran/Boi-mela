import React, { useEffect} from "react";
import "./singlePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import {
  getSingleBooks
} from "../../redux/actions/bookAction";

const SinglePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { book} = useSelector(
    (state) => state.singleBook
  );
 
  console.log(book)

  useEffect(() => {
     console.log("thhis",getSingleBooks(id))
    dispatch(getSingleBooks(id));
  }, [dispatch,id]);

  return (
    <>
          <div className="ProductDetails">
            <div>
               <img src={book.bookImages} className="CarouselImage" alt={book.name} />
          
            </div>

            <div>
              <div className="detailsBlock-1">
                 <h2>{book.name}</h2>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${book.price}`}</h1>
            
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