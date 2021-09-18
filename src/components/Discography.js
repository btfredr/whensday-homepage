import styled from "styled-components";

const About = () => {
  return (
    <div className="about" id="discography">
      <div className="about__container">
        <div className="about__wrapper">
          <AboutRow>
            <div className="about__column1">
              <div className="about__textWrapper">
                <h1 className="about__heading">Discography</h1>
                <p className="about__topline">The Essentials</p>
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO38vomF?theme=0"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  title="Spotify"
                  className="discography__spotify"
                ></iframe>
              </div>
            </div>
          </AboutRow>
        </div>
      </div>
    </div>
  );
};

export default About;

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#faf9f6" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const AboutRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1 col2'` : `'col2 col1'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  height: auto;
  box-shadow: 10px 10px 43px 0px rgba(0, 0, 0, 0.18);
`;
