import React from "react";
import { Link } from "react-router-dom";
import "./allbookCard.css";

const AllBookCard = ({book}) => {
  return (
      <div className="card"> 
        <Link  to={`/book/${book._id}`}>
            <div className="imgbox">  
            <img src={book.bookImages[0].url} alt={book.name} />
            </div>
              <div className="details">
                <p>{book.name}</p>
                <p> authour : {book.authour}</p>
                
                <div class="redes">
                  <span>{`£${book.price}`}</span>
                </div>
            </div>
            
        </Link>
      </div>
  );
};

export default AllBookCard;