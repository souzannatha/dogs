import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login/*" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
