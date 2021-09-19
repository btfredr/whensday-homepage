import styled from "styled-components";
import img from "../assets/images/bucket.jpg";
import img2 from "../assets/images/street.jpg";

const About = ({ imgStart, alt }) => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__wrapper">
          <AboutRow imgStart={imgStart}>
            <div className="about__column1">
              <div className="about__textWrapper">
                <h1 className="about__heading">Who is Whensday?</h1>
                <p className="about__subtitle">
                  Whensday is an upcoming artist based out of the Midwest, Iowa
                  to be exact. After being discovered by Ukraine Producer/DJ
                  Histibe at 12 years old he started working on bettering his
                  craft.
                </p>
                <p className="about__subtitle">
                  Getting the opportunity to work with Histibe a lot as a young
                  artist lead to working with Joe Perez who was working at Kanye
                  West’s creative company Donda, to create artwork for an album
                  Histibe had spent years working on and Whensday helped
                  creatively and writing songs.
                </p>
              </div>
            </div>
            <div className="about__column2">
              <div className="about__imgWrap">
                <img src={img} alt={alt} className="about__img" />
              </div>
            </div>
          </AboutRow>
        </div>
      </div>

      <div className="about__container2">
        <div className="about__wrapper">
          <AboutRow2>
            <div className="about__column2">
              <div className="about__imgWrap">
                <img src={img2} alt={alt} className="about__img" />
              </div>
            </div>
            <div className="about__column1">
              <div className="about__textWrapper">
                <p className="about__subtitle2">
                  After learning so much from Histibe, Whensday decided to
                  branch out from Histibe’s collective of Mask Movement and
                  practice his craft more on his own. At the beginning of 2020,
                  Whensday has partnered with the young and very versatile
                  producer Flyxo to release multiple songs between the two. The
                  story is to be continued as the duo continue to release songs
                  together to perfect the chemistry and provide ear pleasing
                  music.
                </p>
                <BtnWrap>
                  <a href="#discography" className="about__button">
                    Explore my discography
                  </a>
                </BtnWrap>
              </div>
            </div>
          </AboutRow2>
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
