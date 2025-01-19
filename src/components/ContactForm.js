import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ContactForm = () => {
  return ( 
    <Form className="bg-light text-dark p-5 border shadow">
      <div className="row">
        <Form.Group className="mb-3 col-lg-6" controlId="firstName">
          <Form.Label className="w-100 text-start text-capitalize">Your first name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="secondName">
          <Form.Label className="w-100 text-start text-capitalize">Your second name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

      </div>
      <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label className="w-100 text-start text-capitalize">Your e mail address</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="textArea">
          <Form.Label className="w-100 text-start">message</Form.Label>
          <Form.Control type="textarea" row={3}/>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>  

    </Form>
   );
}
 
export default ContactForm;