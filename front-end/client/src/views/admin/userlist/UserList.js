import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllUsers,deleteUser } from "../../../redux/actions/userAction";
import { DELETE_USER_RESET } from "../../../redux/constants/userConstans";

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.allUsers);

  const {
    isDeleted,
    message,
  } = useSelector((state) => state.  updateProfile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {

    if (isDeleted) {
      history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, history, isDeleted, message]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      

      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;