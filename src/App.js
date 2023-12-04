import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Post from "./pages/blog-single";
import Profile from "./pages/profile";
import CreatePost from "./pages/create";

const App = () => {
  return (
    <>
      <main className="bg-dark min-h-screen overflow-hidden font-lato py-24">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/post/:id" element={<Post />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/post/create" element={<CreatePost />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
