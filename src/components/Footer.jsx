import logo from "../pages/images/logo.png";
import APPICON from "../pages/images/app-store.png";
const Footer = () => {
  return (
    <section className="popular mtop">
      <div className="container">
        <div className="heading flex1"></div>
      </div>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p>
              Join the millions of subscribers around the world who enjoy
              unlimited award-winning TV shows, movies, documentaries, and more.
              As a MovieFlix member, you are charged once a month on the date
              you signed up. There are no contracts, no cancellation fees, and
              no commitments. You have the freedom to online at any time if you
              decide MovieFlix isn't for you.
            </p>

            <div className="icon">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-youtube-square"></i>
            </div>
          </div>

          <div className="box">
            <h2>Company</h2>

            <div className="flex">
              <ul>
                <li>Company</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Our Team</li>
              </ul>

              <ul className="ul">
                <li>Privacy Policy</li>
                <li>Helps Center</li>
                <li>Subscribe</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          <div className="box">
            <h2>Download App</h2>
            <p>
              New Explore in-app events like movie premieres, gaming
              competitions, and livestreams. Discover amazing apps with a rich
              search experience. 1.8M apps available worldwide. 175 storefronts
              in over 40 languages. Over 150 expert editors worldwide. Get the
              details on every app. Privacy and security.
            </p>
            <div className="img flex1"></div>
            <img id="appicon" src={APPICON} alt="img-icon" />
          </div>
        </div>
        <p className="legal">
          Copyright (c) 2023 Copyright All Rights Reserverd. | This was made by{" "}
          <i className="fa fa-heart"></i> Andre Ashmeade
        </p>
      </footer>
    </section>
  );
};

export default Footer;
