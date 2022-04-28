import { useState } from "react";

import spotifyLogo from "../assets/logos/spotify.png";
import applePodLogo from "../assets/logos/apple-pod.png";
import googlePodLogo from "../assets/logos/google-pod.png";
import pocketCastsLogo from "../assets/logos/pocket-casts.png";

export default function Header() {
  let [emailValue, setEmailValue] = useState("");
  let [emailValid, setEmailValid] = useState(true);

  function handleSubmit(e) {
    if (validateEmail(emailValue)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
      e.preventDefault();
    }
  }

  function handleChange(e) {
    setEmailValue(e.target.value);
  }

  return (
    <div className="content">
      <div className="content__text">
        <h1>
          Publish your podcasts
          <span className="white">everywhere.</span>
        </h1>
        <p className="content__text__p">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div className="content__sponsors">
        <img src={spotifyLogo} alt="" />
        <img src={applePodLogo} alt="" />
        <img src={googlePodLogo} alt="" />
        <img src={pocketCastsLogo} alt="" />
      </div>
      <form onSubmit={handleSubmit} action="" className="content__form">
        <div className="content__input-box">
          <input
            id="email"
            type="text"
            value={emailValue}
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <p className={`content__form-error ${emailValid ? "d-n" : ""}`}>
          Oops! Please check your email
        </p>
        <button className="content__form-btn">Request Access</button>
      </form>
    </div>
  );
}

// Helper function to check if an email is valid, just copied from internet

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
