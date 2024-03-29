import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
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
  const [currentUser, setCurrentUser] = useState(null)
  const [herbs, setHerbs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if(loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readHerb()
  },[])

  const readHerb = () => {
    fetch("http://localhost:3000/herbs")
      .then((response) => response.json())
      .then((data) => setHerbs(data))
      .catch((errors) => console.log("Herb read errors:", errors))
  }

  const createHerb = (herb) => {
    fetch("http://localhost:3000/herbs", {
      body: JSON.stringify(herb),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readHerb())
      .catch((errors) => console.log("Herb create errors:", errors))
  }

  const updateHerb = (herb, id) => {
    fetch(`http://localhost:3000/herbs/${id}`, {
      body: JSON.stringify(herb),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then(() => readHerb())
      .catch((errors) => console.log("Herb update errors:", errors))
  }

  const deleteHerb = (id) => {
    fetch(`http://localhost:3000/herbs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readHerb())
      .catch((errors) => console.log("delete errors:", errors))
  }

  const signUp = (userInfo) => {
    fetch("http://localhost:3000/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("Sign up errors: ",error))
  }
 
  const signIn = (userInfo) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("Sign in errors: ",error))
  }

  const logout = () => {
    fetch(`http://localhost:3000/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      }).then(() => {
        navigate("/")
      })
      .catch((error) => console.log("log out errors: ", error))
  }
  
  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/herbindex" element={<HerbIndex herbs={herbs} />} />
        {currentUser && (
          <Route path="/myherbs" element={<HerbProtectedIndex herbs={herbs} currentUser={currentUser} deleteHerb={deleteHerb} />} />
        )}
        <Route path="/herbshow/:id" element={<HerbShow herbs={herbs} currentUser={currentUser} deleteHerb={deleteHerb} />} />
        <Route path="/herbnew" element={<HerbNew currentUser={currentUser} createHerb={createHerb} />} />        <Route path="/herbedit/:id" element={ <HerbEdit updateHerb={updateHerb} herbs={herbs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;