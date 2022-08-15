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
import PersistLogin from "./components/PersistLogin";
import CreatePost from "./pages/CreatePost";
import ViewProfile from "./pages/ViewProfile";
import ViewFollowing from "./pages/ViewFollowing";
import ViewFollowers from "./pages/ViewFollowers";
import Search from "./pages/Search";

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
              <Route path="createpost" element={<CreatePost />} />
              <Route path="viewprofile" element={<ViewProfile />} />
              <Route path="viewfollowing" element={<ViewFollowing />} />
              <Route path="viewfollowers" element={<ViewFollowers />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
