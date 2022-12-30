import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
const UserStateContext = createContext();
function UserStateProvider({ children }) {
  const [emailId, setEmailId] = useState("test@gmail.com");
  const [userPassword, setUserPassword] = useState(
    "ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae"
  );
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const validateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signin",
        {
          email: emailId,
          password: userPassword,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
        {
          withCredentials: true,
        }
      );
      setData(response);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/dashboard");
    }
  };
  return (
    <UserStateContext.Provider value={{ validateUser, data }}>
      {children}
    </UserStateContext.Provider>
  );
}
export { UserStateContext, UserStateProvider };
