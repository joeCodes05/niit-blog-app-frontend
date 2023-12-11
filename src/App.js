import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import CreatePost from "./pages/create";
import AccountSettings from "./pages/settings";
import PostSingle from "./pages/post-single";

const App = () => {
  return (
    <>
      <main className="bg-dark min-h-screen overflow-hidden font-lato">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/post/:id" element={<PostSingle />} />
            <Route exact path="/account/profile" element={<Profile />} />
            <Route exact path="/account/settings" element={<AccountSettings />} />
            <Route exact path="/post/create" element={<CreatePost />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
