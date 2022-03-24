import React, { Fragment, useEffect, useState } from "react";
import "./addBook.css";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../../../redux/actions/bookAction";
import { Button } from "@material-ui/core";
import { NEW_BOOK_RESET } from "../../../redux/constants/bookConstants";
import { Link , useNavigate} from "react-router-dom";

const AddBook = ({ history }) => {
  const dispatch = useDispatch();

                                             

  const { success } = useSelector((state) => state.addBooks);
 const navigate = useNavigate();
  const [name, setName] = useState("");
  const [authour, setAuthour] = useState("");
  const [ published, setPublished] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [bookImages, setBookImages] = useState();
  const [imagesPreview, setImagesPreview] = useState([]);


  useEffect(() => {
   
    if (success) {
      navigate("/admin");
      dispatch({ type: NEW_BOOK_RESET });
    }
  }, [dispatch, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("authour", authour);
    myForm.set("published", published);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("stock", stock);
    myForm.set("bookImages", bookImages);
    
    dispatch(addBook(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setBookImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setBookImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  //  const createProductImagesChanges = (e) => {
  //   if (e.target.name === "bookImages") {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setImagesPreview(reader.result);
  //         setBookImages(reader.result);
  //       }
  //     };

  //     reader.readAsDataURL(e.target.files[0]);
  //   } 
  // };
  return (
    <Fragment>

      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Add book</h1>

            <div>
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="authour"
                required
                value={authour}
                onChange={(e) => setAuthour(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="published"
                required
                onChange={(e) => setPublished(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
        
              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>


            <div>
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
    
              <input
                type="file"
                name="bookImages"
                accept="image/*"
                onChange={createProductImagesChange}
              />
            </div>
              <div id="createProductFormImage">
              {imagesPreview.map((bookImages, index) => (
                <img key={index} src={bookImages} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;