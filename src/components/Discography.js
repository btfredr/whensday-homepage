const Discography = () => {
  return (
    <div className="discography" id="discography">
      <div className="discography__wrapper">
        <div className="discography__spotifyContainer">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO38vomF?theme=0"
            width="100%"
            height="400"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify"
            className="discography__spotify"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Discography;
