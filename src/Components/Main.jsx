import React, { useState } from "react";
import MovieCard from "./MovieCard"; // Importing MovieCard component
import { movieData } from "../movieData"; // Importing movieData

// Main component to display movies based on filters and search
const Main = ({ selectedGenres, selectedLanguages, selectedCountries }) => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // JSX for rendering Main component
  return (
    <div>
      {/* Main heading */}
      <h1 className="fw-bold text-center main-heading my-4">Movie Katta</h1>
      {/* Search input */}
      <div className="row my-4 d-flex justify-content-center">
        <div className="col-lg-7 d-flex rounded-5 align-items-center search">
          <input
            type="search"
            className="form-control search_input px-4 rounded-4 py-3"
            placeholder="Search for movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* Movie grid */}
      <div className="row gy-4">
        {/* Filter and map movies */}
        {movieData
          .filter((movie) => {
            const genreMatch =
              selectedGenres.length === 0 ||
              selectedGenres.some((genre) =>
                movie.moviegenres
                  .map((g) => g.toLowerCase())
                  .includes(genre.toLowerCase())
              );
            const languageMatch =
              selectedLanguages.length === 0 ||
              selectedLanguages.some((language) =>
                movie.movielanguages
                  .map((l) => l.toLowerCase())
                  .includes(language.toLowerCase())
              );
            const countryMatch =
              selectedCountries.length === 0 ||
              selectedCountries.some((country) =>
                movie.moviecountries
                  .map((c) => c.toLowerCase())
                  .includes(country.toLowerCase())
              );
            const searchMatch = movie.movietitle
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
            return genreMatch && languageMatch && countryMatch && searchMatch;
          })
          .map((movie) => {
            return (
              <div key={movie.imdbmovieid} className="col-lg-3 col-md-6">
                <MovieCard
                  title={movie.movietitle}
                  image={movie.moviemainphotos}
                  languages={movie.movielanguages}
                  genres={movie.moviegenres}
                  countries={movie.moviecountries}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
