import React from "react";
import { AccountOption } from "../AccountOption/AccountOption";
import { CompanyLogo } from "../CompanyLogo/CompanyLogo";
import { FooterButton } from "../FooterButton/FooterButton";
import "./sign-in-with-google.css";

export const SignInWithGoogle = ({ className }) => {
  return (
    <div className={`sign-in-with-google ${className}`}>
      <div className="account-choice-box">
        <div className="div-2">
          <div className="title-contents">
            <img className="google-logo" alt="Google logo" />

            <div className="text-wrapper-4">Sign in with Google</div>
          </div>

          <div className="div-3" />
        </div>

        <div className="main-content">
          <div className="header">
            <CompanyLogo />
            <div className="header-text">
              <div className="text-wrapper-5">Choose an account</div>

              <p className="to-continue-to">
                <span className="span">to continue to</span>

                <span className="text-wrapper-6"> Company</span>
              </p>
            </div>
          </div>

          <div className="accounts-wrapper">
            <AccountOption
              className="account-option-instance"
              state="default"
            />
            <AccountOption
              className="account-option-instance"
              state="default"
            />
            <div className="div-2">
              <div className="another-account">
                <img className="account-icon" alt="Account icon" />

                <div className="text-wrapper-7">Use another account</div>
              </div>

              <div className="element-px-border-bottom">
                <div className="div-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="description">
          <p className="to-continue-google">
            <span className="text-wrapper-8">
              To continue, Google will share your name, email address, language
              preference, and profile picture with Company. Before using this
              app, you can review Company’s
              <br />
            </span>

            <span className="text-wrapper-6">privacy policy</span>

            <span className="text-wrapper-8"> and </span>

            <span className="text-wrapper-6">terms of service</span>

            <span className="text-wrapper-8">.</span>
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="language-option-2">
          <div className="text-wrapper-9">English (United States)</div>

          <img className="img" alt="Arrow" />
        </div>

        <div className="right-buttons">
          <FooterButton
            className="footer-button-instance"
            state="default"
            text="Help"
          />
          <FooterButton
            className="footer-button-instance"
            state="default"
            text="Privacy"
          />
          <FooterButton
            className="footer-button-instance"
            state="default"
            text="Terms"
          />
        </div>
      </div>
    </div>
  );
};
