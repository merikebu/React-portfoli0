import React from "react";
import AboutImg from '../assets/images/about.jpg';
import ViewMyworkBtn from "./ViewMyworkBtn";


const AboutSection = () => {
  return ( 
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid w-75 shadow" src={AboutImg} alt="about img"/>

          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">about me</h2>
            <p className="text-start"> I am a well-trained teammate who loves to share ideas and
              prioritizes communication in order to achieve goals within the set
              deadlines. I enjoy being challenged and working on projects that
              require me to step outside of my comfort zone.</p>
            <p className="text-start mb-5">also a developer who loves to
              solve problems. I am having an experience of building
              high-performing, responsive, beautiful web applications to deliver</p>
            <ViewMyworkBtn/>

          </div>

        </div>

      </div>
      
    </div>
   );
}
 
export default AboutSection;