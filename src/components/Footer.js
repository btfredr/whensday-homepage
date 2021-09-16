import { FaInstagram, FaSpotify, FaTwitter } from "react-icons/fa";
import { SiApplemusic, SiTidal } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__socialMedia">
          <div className="footer__socialMediaWrap">
            <Link to="/" className="footer__logo">
              Whensday
            </Link>
            <small className="footer__rights">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </small>
            <div className="footer__socialIcons">
              <a
                href="//www.instagram.com/whensdayod"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="//www.twitter.com/whensdayod"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="https://open.spotify.com/artist/5kGJj49tILjz1N5FHt77fm"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Spotify"
              >
                <FaSpotify />
              </a>

              <a
                href="https://music.apple.com/us/artist/whensday/677854964"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Apple Music"
              >
                <SiApplemusic />
              </a>

              <a
                href="https://tidal.com/browse/artist/6467463"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Apple Music"
              >
                <SiTidal />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
