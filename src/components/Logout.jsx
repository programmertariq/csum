import React, { useEffect } from "react";
import userService from "../service/userService";

const Logout = () => {
  useEffect(() => {
    userService.logout();
    window.location = "/";
  });

  return null;
};

export default Logout;
