import styled from "styled-components";
import Releases from "./albums/Releases";

const Discography = () => {
  return (
    <div className="discography" id="discography">
      <div className="discography__container">
        <div className="discography__wrapper">
          <DiscographyRow>
            <div className="discography__column1">
              <div className="discography__textWrapper">
                <h1 className="discography__heading">Discography</h1>
                <p className="discography__topline">The Essentials</p>
                <div className="discography__spotifyContainer">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO38vomF?theme=0"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="Spotify"
                    className="discography__spotify"
                  />
                </div>
                <div>
                  <p className="releases__topline">The Albums</p>
                  <Releases />
                </div>
              </div>
            </div>
          </DiscographyRow>
        </div>
      </div>
    </div>
  );
};

export default Discography;

export const DiscographyContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#faf9f6" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const DiscographyRow = styled.div`
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

export const discographyRow2 = styled.div`
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
