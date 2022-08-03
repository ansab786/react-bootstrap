import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";

function SignIn() {
  return (
    <>
      <div className="body">
        <img
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt="icon"
        />
        <h4>Sign In Page</h4>
        <p>
          Build a sign in page to display your command on bootstrap:
          <span style={{ color: "red" }}> text with color red </span>
          pseudo element.
          <a href="https://www.google.com">
            Works in latest Chrom, Safari and Firefox. This is a clickable
            section that will take us to a new page.
          </a>
        </p>
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Remember me" className="text" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn">
            Sign In
          </Button>
        </Form>

        <h6>© 2017-2018</h6>
      </div>
    </>
  );
}

export default SignIn;
