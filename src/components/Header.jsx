import React from "react";
import ProfileMenu from "./layout/ProfileMenu";

const Header = ({ user, source }) => {
  return (
    <div className="dashboard-header">
      <div>{source[0].toUpperCase() + source.substring(1, source.length)}</div>
      <div>
        <ProfileMenu user={user} />
      </div>
    </div>
  );
};

export default Header;
