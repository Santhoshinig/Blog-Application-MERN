import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router v6
import aboutus from "./aboutus.jpg";
import "./AboutUs.scss";

const AboutUs = () => {
  const navigate = useNavigate(); // Hook from React Router to manage navigation

  const handleContactUsClick = () => {
    navigate("/home"); // Navigate to the home page when "Contact Us" is clicked
  };

  return (
    <section className="about">
      <h2 className="about__title">About Us</h2>

      <div className="about__details">
        <div className="about__left">
          <h3 className="about__mainlefttitle">
            Welcome to Neutronzz - Where Ideas Spark!
          </h3>
          <p className="about__paragraph">
            At Neutronzz, we believe that every idea has the potential to create
            a ripple effect. Whether you're an aspiring writer, a seasoned
            blogger, or someone with a unique perspective to share, Neutronzz is
            your platform to shine. Our mission is to provide a space where
            creativity meets community, allowing you to connect with like-minded
            individuals, share your thoughts, and inspire others.
          </p>
          <p className="about__paragraph">
            Join us on this journey to explore diverse topics, engage in
            meaningful discussions, and contribute to a growing community of
            thinkers and creators. At Neutronzz, your voice matters, and we're
            here to help you amplify it.
          </p>
          <button className="about__btn" onClick={handleContactUsClick}>
            Contact Us
          </button>
          <div className="about__social">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <FontAwesomeIcon
                className="about__socialicons"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn"
            >
              <FontAwesomeIcon
                className="about__socialicons"
                icon={faLinkedin}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter"
            >
              <FontAwesomeIcon
                className="about__socialicons"
                icon={faTwitter}
              />
            </a>
          </div>
        </div>

        <div className="about__right">
          <img
            src={aboutus}
            alt="Team members discussing ideas at Neutronzz"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
