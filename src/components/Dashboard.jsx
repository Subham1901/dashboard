import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import useFetch from "./hooks/useFetch";
import userContextData from "./context/userContext";
import Header from "./Header";
import ChatContainer from "./layout/ChatContainer";
const Dashboard = () => {
  //get the location
  const { pathname, search } = useLocation();
  const [location, setLocation] = useState(`${pathname}${search}`); //set the locatio  and search id

  const { data, load } = useFetch();
  const [userinfo, setUserInfo] = useState();
  const [query] = useSearchParams();

  useEffect(() => {
    //filter by user id if query param is present
    if (data !== undefined && query.get("id") !== undefined) {
      const getIndex = data.findIndex((data) => data?.id === +query.get("id"));
      setUserInfo(data[getIndex]);
    }
  }, [data, query]);

  return (
    <userContextData.Provider value={{ data, load, location, userinfo }}>
      <div className="dashboard-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div>
          <Header
            user={userinfo}
            source={pathname.split("/")[pathname.split("/").length - 1]}
          />
          <Outlet />
        </div>
        <ChatContainer />
      </div>
    </userContextData.Provider>
  );
};

export default Dashboard;
