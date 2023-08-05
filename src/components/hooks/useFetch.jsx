import { useState, useEffect } from "react";
const URL = "https://panorbit.in/api/users.json";
const useFetch = () => {
  const [data, setUserdata] = useState();
  const [load, setLoading] = useState(false);

  const getUserInfo = async () => {
    try {
      setLoading(true);
      //using windows fetch API
      let userInfo = await fetch(URL);
      userInfo = await userInfo.json(); //get the data
      setUserdata(userInfo?.users); //set the userdata to state
      setLoading(false);
    } catch (error) {
      console.log(error); // log if error
    }
  };
  useEffect(() => {
    //API calling here
    getUserInfo();
  }, []);

  return { data, load };
};
export default useFetch;
