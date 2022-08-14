<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Feed from "./pages/Feed";
import Saves from "./pages/Saves";
<<<<<<< HEAD
import Direct from "./pages/Direct";

=======
import Direct from "./pages/Direct"
import PersistLogin from "./components/PersistLogin";
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
function App() {

  return (
    <>
      <Routes>
<<<<<<< HEAD
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
=======
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="home" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="feed" element={<Feed />} />
              <Route path="saves" element={<Saves />} />
              <Route path="direct" element={<Direct />} />
            </Route>
          </Route>
        </Route>
>>>>>>> ff70b185a17a53426d533c66338301bc01f5408e
      </Routes>
    </>
  );
}

export default App;
