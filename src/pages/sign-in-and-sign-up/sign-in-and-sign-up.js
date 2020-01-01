import React from "react";
import "./sign-in-and-sign-up-styles.scss";
import SignIn from "../../component/sign-in/sign-in";
import SignUp from "../../component/sign-up/sign-up";
const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
