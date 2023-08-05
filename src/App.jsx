import React from "react";
import Home from "./components/Home";
import userContextData from "./components/context/userContext";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ToDo from "./components/ToDo";
import Gallery from "./components/Gallery";
import Post from "./components/Post";
import useFetch from "./components/hooks/useFetch";
import { createBrowserRouter } from "react-router-dom";

const App = () => {
  const { data, load } = useFetch();
  return (
    <div>
      <userContextData.Provider value={{ data, load }}>
        <Home />
      </userContextData.Provider>
    </div>
  );
};

// router
export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "gallery", element: <Gallery /> },
      { path: "post", element: <Post /> },
      { path: "todo", element: <ToDo /> },
    ],
  },
]);

export default App;
