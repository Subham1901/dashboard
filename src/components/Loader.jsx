import React from "react";
import { Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <div className="loader">
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" sx={{ width: "10rem", marginLeft: 4 }} />
    </div>
  );
};

export default Loader;
