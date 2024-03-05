import React from "react"
import about from "../assets/botanical-garden.jpg"

const AboutUs = () => {
  return (
    <>
      <div className="about-box">
        <img className="about-picture"
          alt="about us picture"
          src={about}
        />
        <div className="about-text">
          <h1>About Us</h1>
          <p>The Leaf Library strives to offer an extensive range of alternative medicinal options. For thousands of years, herbal medicines have been used as remedies, and our digital library seeks to provide a modern take on this ancient practice.</p> 
          <p>Using cutting-edge technology, our library can be filtered and curated to cater to your specific ailments, not solely based on herbal selections. Our database acts as your personal medical shaman, selecting various herbs to ease your symptoms and offer relief.
          </p> 
          <p>The Leaf Library also welcomes individuals with extensive herbal knowledge to contribute to our database, thus providing an opportunity for others to benefit from their expertise. We invite you to explore the vast collection of herbs and remedies available in the Leaf Library and discover the world of alternative medicine.</p>
        </div>
              
      </div>
      
    </>
  )
} 

export default AboutUs