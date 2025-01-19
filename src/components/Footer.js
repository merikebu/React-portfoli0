import React from "react";
const Footer = () => {
  return ( 
    <footer className="bg-primary text-light py-3">
      <div className="container">
        <ul className="list-unstyled d-flex flex flex-column flex-sm-row justify-content-center">
          <li>
            <a href="#header " className="text-light text-decoration-none">Home</a>
          </li>
          <li className="me-0 me-sm-3 mb-2 md-sm-0">
            <a href="#projects " className="text-light text-decoration-none">Projects</a>
          </li>
          <li className="mx-0mx-sm-3 my my-sm-0">
            <a href="#about " className="text-light text-decoration-none">About</a>
          </li>
          <li>
            <a href="#contact " className="text-light text-decoration-none">Contact</a>
          </li>
        </ul>
        <hr className="w-50 mx-auto"/>
        <p className="mb-0">copyright <span><i class="bi bi-c-circle"></i></span>All rights reserved</p>
      </div>
    </footer>
   );
}
 
export default Footer;