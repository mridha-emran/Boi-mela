import React, { useEffect } from "react";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBook } from "../../../redux/actions/bookAction";
import { getAllOrders } from "../../../redux/actions/orderAction";
import { getAllUsers } from "../../../redux/actions/userAction";
import AddIcon from '@mui/icons-material/Add';
const Dashboard = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getBook());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);
    console.log ( "orders",orders.bookItems)
  return (
    <div className="dashboard">
      {/* <Sidebar /> */}

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{books && books.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
            <Link to="/admin/addBook">
              <p>add book</p>
              <AddIcon />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;