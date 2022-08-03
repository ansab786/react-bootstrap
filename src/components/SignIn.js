import React from "react";
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
        <div className="form">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault" />
            Remember Me
          </div>

          <button type="button" class="btn btn-primary">
            Sign In
          </button>
        </div>
        <h6>© 2017-2018</h6>
      </div>
    </>
  );
}

export default SignIn;
