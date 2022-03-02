import React from "react";
import { Link } from "react-router-dom";
import "./bookCard.css";

const BookCard = ({book}) => {
  return (
      <div>
        <Link className="bookCard" to={`/book/${book._id}`}>
            <img src={book.bookImages} alt={book.name} />
            <p>{book.name}</p>           
            <span>{`£${book.price}`}</span>
        </Link>
      </div>
  );
};

export default BookCard;