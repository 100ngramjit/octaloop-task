import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import LoginPage from "../components/LoginPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default Routing;
