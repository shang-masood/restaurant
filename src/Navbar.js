import { Route, Routes } from 'react-router';
import React from 'react';
import Home from './pages/Home';
import Orderlist from './pages/orderlist';

const NavBar = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Orderlist" element={<Orderlist />}></Route>
  </Routes>
);

export default NavBar;