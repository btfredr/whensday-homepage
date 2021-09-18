import { albums } from "./Data";
import styled from "styled-components";
import React from "react";

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

const Releases = () => {
  return (
    <div className="discography" id="discography">
      <div className="discography__container">
        <div className="discography__wrapper">
          <DiscographyRow>
            <div className="discography__column1">
              <div className="discography__textWrapper">
                <div className="releases">
                  {albums.map((album) => {
                    return (
                      <div className="releases__release">
                        <img
                          src={album.img}
                          alt={album.alt}
                          className="releases__img"
                        />
                        <h2 className="releases__title">{album.title}</h2>
                        <a
                          href={album.url}
                          target="_blank"
                          rel="noreferrer"
                          className="releases__button"
                        >
                          Listen Now
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </DiscographyRow>
        </div>
      </div>
    </div>
  );
};

export default Releases;
