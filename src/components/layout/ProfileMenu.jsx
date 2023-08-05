import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileMenu = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="menu-container">
      <div className="menu-button" onClick={() => setToggle(!toggle)}>
        <Avatar src={user?.profilepicture} sx={{ marginRight: 2 }} />
        <p>{user?.name}</p>
      </div>
      {toggle && (
        <div className="toggle-container">
          <Avatar src={user?.profilepicture} sx={{ width: 100, height: 100 }} />
          <p className="name">{user?.name}</p>
          <p className="mail">{user?.email}</p>
          <button>
            <Link to={"/"}>Sign out</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
