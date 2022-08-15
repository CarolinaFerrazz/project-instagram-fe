import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Feed from "./pages/Feed";
import Saves from "./pages/Saves";
import Direct from "./pages/Direct";
import PersistLogin from "./components/PersistLogin";
import InfoPost from "./pages/InfoPost";
function App() {
  return (
    <>
      <Routes>
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
              <Route path="infopost" element={<InfoPost />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
