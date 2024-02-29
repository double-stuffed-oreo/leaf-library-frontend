import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HerbIndex from "./pages/HerbIndex";
import HerbProtectedIndex from "./pages/HerbProtectedIndex";
import HerbShow from "./pages/HerbShow";
import HerbEdit from "./pages/HerbEdit";
import NotFound from "./pages/NotFound";
import HerbNew from "./pages/HerbNew";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import mockUsers from "./mockUsers.js";
import mockHerbs from "./mockHerbs.js";
import './App.css';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/herbindex" element={<HerbIndex />} />
        <Route path="/myherbs" element={<HerbProtectedIndex />} />
        <Route path="/herbshow/:id" element={<HerbShow />} />
        <Route path="/herbnew" element={<HerbNew />} />
        <Route path="/herbedit/:id" element={ <HerbEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;