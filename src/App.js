import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <main className="bg-dark min-h-screen overflow-hidden font-lato">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
