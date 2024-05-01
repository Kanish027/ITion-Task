import React from "react";

// MovieCard component to display movie information
const MovieCard = ({ title, image, genres, languages, countries }) => {
  // JSX for rendering movie card
  return (
    <div className="card" style={{ height: "27rem" }}>
      {/* Movie image */}
      <img
        src={image}
        alt=""
        className="card-img-top"
        style={{ height: "12rem", objectFit: "cover" }}
      />
      <div className="card-body">
        {/* Movie title */}
        <h5 className="card-title text-center">{title}</h5>
        <div className="card-text">
          {/* Display genres */}
          <p>Genres: {genres.join(", ")}</p>
          {/* Display countries with line clamping */}
          <p
            className="line-clamp line-clamp-2"
            style={{
              maxWidth: "15rem",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            Countries: {countries.join(", ")}
          </p>
          {/* Display languages with line clamping */}
          <div
            className="line-clamp line-clamp-2"
            style={{
              maxWidth: "15rem",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            <small>Available in: {languages.join(", ")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
