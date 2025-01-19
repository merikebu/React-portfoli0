import React from "react";
import ContactForm from "./ContactForm";
const ContactSection = () => {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">contact me</h2>
            <p>brian...</p>
            <p>0702546834</p>

            <p>kenya @ nairobi </p>
            <hr className="w-50 mx-auto"></hr>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6-mt-5 mt-md-0">
            <ContactForm/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
