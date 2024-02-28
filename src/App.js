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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
