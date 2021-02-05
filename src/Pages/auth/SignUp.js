import React from "react";
import trelloLogo from "../../trello-logo/trello-logo-blue.png";
import signupimg from "../../trello-images/illust1.svg";
import signupimg2 from "../../trello-images/illust2.svg";
import SignupWith from "./SignupWith";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <img className="trellopng" src={trelloLogo} />
      <Form></Form>
      <div className="signupIllustrations">
        <img className="signupimg" src={signupimg} />
        <img className="signupimg" src={signupimg2} />
      </div>
    </>
  );
}

function Form() {
  const signupwith = [
    [
      "https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg",
      "https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg",
      "https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/6fc4ecf05a97cfb43cfcbb14738a5aa0/apple-logo-black.svg",
    ],
    ["Google", "Microsoft", "Apple"],
  ];
  const signupwithContent = signupwith[0].map((e, k) => (
      <Link>
    <SignupWith
      key={`${e}${signupwith[1][k]}`}
      source={e}
      trough={signupwith[1][k]}
    ></SignupWith>
    </Link>
  ));
  return (
    <div className="signupMain">
      <div id="signupForm">
        <h1>Register an account</h1>
        <form>
          <input placeholder="email" type="email" />
          <p id="simple warning">
            By registering, you confirm that you accept our{" "}
            <Link to="/about">Terms of Service </Link> and
            <Link to="/about"> Privacy Policy</Link>.
          </p>
          <input type="Submit" value="Submit" />
          <p
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            OR
          </p>
          {signupwithContent}
          <br />
          <p style={{ textAlign: "center" }}>
            Already have account? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
