import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import 'antd';
import '@ant-design/icons'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Productss.." Component={Products} />
          <Route path="/Servicess.." Component={Services} />
          <Route path="/AboutUs.." Component={AboutUs} />
          <Route path="/SignUp.." Component={SignUp} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
