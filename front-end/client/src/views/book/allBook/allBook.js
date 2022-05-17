import React, {useEffect} from "react";
import "./allBook.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../component/Loader/Loader";
import {getBook } from "../../../redux/actions/bookAction";
import AllBookCard from "../../../component/allbookCard/AllBookCard";
import Helmet from "react-helmet";

const AllBook = () => {
  const dispatch = useDispatch();
   const { loading,books } = useSelector((state) => state.books)
  useEffect(() => {  
    dispatch(getBook());
  }, [dispatch]);

  return ( 
    <>
        {loading ? (
        <Loader />
      ):(
        <>
         <Helmet>
           <title> allBook</title>
          </Helmet>
          <h2 className="productsHeading">Books</h2>
          <div className="container">
            {books &&
              books.map((book) => (
                <AllBookCard book={book} />
                ))}
          </div>
      
        </>
      )}
    </>
  );
};

export default AllBook;