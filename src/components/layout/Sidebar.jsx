import React, { useContext } from "react";
import Arrow from "./Arrow";
import { NavLink, useLocation } from "react-router-dom";
import userContextData from "../context/userContext";
const Sidebar = () => {
  const { pathname, search } = useLocation();
  const { location } = useContext(userContextData);
  return (
    <div className="sidebar-content">
      <ul>
        <li
          className={pathname.includes("/dashboard/profile") ? "active-li" : ""}
        >
          <NavLink to={location ? location : "profile"}>Profile</NavLink>
          {pathname.includes("/dashboard/profile") ? <Arrow /> : ""}
        </li>
        <li className={pathname === "/dashboard/gallery" ? "active-li" : ""}>
          <NavLink to={`gallery${search}`}>Gallery</NavLink>
          {pathname === "/dashboard/gallery" ? <Arrow /> : ""}
        </li>
        <li className={pathname === "/dashboard/post" ? "active-li" : ""}>
          <NavLink to={`post${search}`}>Post</NavLink>
          {pathname === "/dashboard/post" ? <Arrow /> : ""}
        </li>
        <li className={pathname === "/dashboard/todo" ? "active-li" : ""}>
          <NavLink to={`todo${search}`}>Todo</NavLink>
          {pathname === "/dashboard/todo" ? <Arrow /> : ""}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
