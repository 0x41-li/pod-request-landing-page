import spotifyLogo from "../assets/logos/spotify.png";
import applePodLogo from "../assets/logos/apple-pod.png";
import googlePodLogo from "../assets/logos/google-pod.png";
import pocketCastsLogo from "../assets/logos/pocket-casts.png";

export default function Header() {
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
      <form action="" className="content__form">

        <div className="content__input-box">
          <input id="email" type="text" />
          <label htmlFor="email">Email address</label>
        </div>

        <button className="content__form-btn">Request Access</button>
      </form>
    </div>
  );
}
