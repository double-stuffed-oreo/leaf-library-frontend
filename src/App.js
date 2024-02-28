import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import mockUsers from './mockUsers.js';
import mockHerbs from './mockHerbs.js';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HerbIndex from "./pages/HerbIndex";
import HerbProtectedIndex from "./pages/HerbProtectedIndex";
import HerbShow from "./pages/HerbShow";
import HerbEdit from "./pages/HerbEdit";
import NotFound from "./pages/NotFound";
import HerbNew from "./pages/HerbNew";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const App = () => {
  (
  <>
      <h3>The Leaf Library</h3>    
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/herbsindex"
          element={<HerbsIndex herbs={herbs} />}
        />
        <Route path="/myherbs" element={<HerbsProtectedIndex />} />
        <Route
          path="/herbsshow/:id"
          element={<HerbShow herbs={herbs} />}
        />
        <Route
          path="/herbsnew"
          element={<HerbNew currentUser={currentUser} />}
        />
        <Route
          path="/herbedit/:id"
          element={
            <HerbEdit currentUser={currentUser} herbs={herbs} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;