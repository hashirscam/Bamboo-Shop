import React from "react";
import { Route , Routes } from "react-router-dom";
import {Header, Footer} from './containers';
import {Home, Custom, Cart, About, Shop, Deforest, Plastic, Zerowaste} from './pages';
import { Singleproduct } from "./components";
import AppContext from "./utils/context";

import "./App.css";

const App = () => {
  return (
    <AppContext>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Singleproduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/deforest" element={<Deforest />} />
          <Route path="/plastic" element={<Plastic />} />
          <Route path="/zero-waste" element={<Zerowaste />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<Custom />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer />
    </AppContext>
)};

export default App;
