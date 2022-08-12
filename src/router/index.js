import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import EditProfile from "../pages/EditProfile";
import Feed from "../pages/Feed";
import Saves from "../pages/Saves";
import Direct from "../pages/Direct";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="feed" element={<Feed />} />
        <Route path="saves" element={<Saves />} />
        <Route path="direct" element={<Direct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
