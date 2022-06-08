import React, {useEffect,useState} from "react";
import "./allBook.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../component/Loader/Loader";
import {getBook } from "../../../redux/actions/bookAction";
import AllBookCard from "../../../component/allbookCard/AllBookCard";
import { useParams } from 'react-router-dom';
import Helmet from "react-helmet";
import Pagination from "react-js-pagination";


const categories = [
  "ফ্যান্টাসি(Fantasy)",
  "রোমান্স(Romance)",
  "নাটক(drama)",
  "সাই-ফাই(Sci-Fi)",
  "রহস্য(Mystery)",
  "ক্লাসিক(Classic",
  "other",
];

const AllBook = () => {
  const dispatch = useDispatch();
  const { loading,books,resultPerPage,productsCount } = useSelector((state) => state.books)
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {  
    dispatch(getBook(keyword, currentPage,category));
  }, [dispatch,keyword, currentPage,category]);

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
          <div className="containers">
            {books &&
              books.map((book) => (
                <AllBookCard book={book} />
                ))}
          </div>

            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>

            <div className="filterBox">
            
              <h3 className="">Categories</h3>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            </div>

        </>
      )}
    </>
  );
};

export default AllBook;