import React from "react"
import home_img from "../assets/tree-book.jpg"


const Home = () => {
  return (
    <>
      <div className="home-contents">
        <h1 className="home-intro">Welcome to the Leaf Library</h1>
        <br></br>
        <img className="home-image"
          alt="home image"
          src={home_img}
        />
      </div>
    </>
  )
} 

export default Home