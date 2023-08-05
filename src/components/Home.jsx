import React from "react";
import UserList from "./layout/UserList";
import BackSvg from "./layout/BackSvg";
const Home = () => {
  return (
    <div className="main-container">
      <div className="svg-gradient">
        <BackSvg />
        <UserList />
      </div>
    </div>
  );
};

export default Home;
