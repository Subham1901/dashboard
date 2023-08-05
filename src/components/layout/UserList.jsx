import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Loader from "../Loader";
import userContextData from "../context/userContext";
import { Link } from "react-router-dom";
const UserList = () => {
  const { data, load } = useContext(userContextData);

  return (
    <div className="card-list">
      <div className="user-card">
        <div className="card-header">
          <h5>Select an account</h5>
        </div>
        <div className="card-content">
          <div className="users">
            {load
              ? [...Array(10).fill("0")].map((data, index) => (
                  <Loader key={index} />
                ))
              : data &&
                data.map((user) => (
                  <Link key={user?.id} to={`dashboard/profile?id=${user?.id}`}>
                    <div className="user-list">
                      <Avatar
                        sx={{ marginRight: 2 }}
                        alt={user?.username}
                        src={user?.profilepicture}
                      />
                      <p>{user?.name}</p>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
