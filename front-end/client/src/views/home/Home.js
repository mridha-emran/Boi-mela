import React,{  useEffect }  from "react";
import BookCard from "../../component/bookCard/BookCard";
import {getBook } from "../../redux/actions/bookAction";
import { useSelector, useDispatch } from "react-redux";

import "./home.css";


const Home = () => {
   const dispatch = useDispatch();
    const {books } = useSelector((state) => state.books);
  // const book ={
  //   name:"test book",
  //   price:"400",
  //   images:[{url:"http://kbabooks.com/wp-content/uploads/2015/11/Bangla-Moulud-Sharif.jpg"}],
  //   _id:'test'
  // }
  console.log(books)
  useEffect(() => {
    
    dispatch(getBook());
  }, [dispatch]);
  return (
   
        <>
          <div className="banner">
          </div>
          <h2 className="heading">Featured Products</h2>
          <div className="container">

             {books &&
              books.map((book) => (
                <BookCard book={book} />
              ))}
          </div>
        </>
   
  );
};

export default Home;