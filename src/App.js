import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NoteFaund from "./pages/NoteFaund";
import Cart from "./pages/Cart";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoteFaund />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
