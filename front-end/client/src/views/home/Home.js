import React from "react";
import BookCard from "../../component/bookCard/BookCard";
import "./home.css";


const Home = () => {

  const book ={
    name:"test book",
    price:"400",
    images:[{url:"http://kbabooks.com/wp-content/uploads/2015/11/Bangla-Moulud-Sharif.jpg"}],
    _id:'test'
  }
  return (
   
        <>
          <div className="banner">
          </div>
          <h2 className="heading">Featured Products</h2>
          <div className="container">
            <BookCard book={book} />
            <BookCard book={book} />
            <BookCard book={book} />
            <BookCard book={book} />
            <BookCard book={book} />
          </div>
        </>
   
  );
};

export default Home;