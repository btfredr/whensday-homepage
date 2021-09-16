import styled from "styled-components";
import Video from "../assets/videos/header.MP4";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__container">
        <div className="hero__bg">
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          <div className="home__background"></div>
        </div>

        <div className="hero__content">
          <h1 className="hero__h1">Welcome to my world</h1>
        </div>

        <HeroBtnWrapper>
          <a href="#about" className="hero__button">
            About me
          </a>
        </HeroBtnWrapper>
      </div>
    </div>
  );
};

export default Hero;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.4;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
