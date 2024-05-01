import React, { useState } from "react";

// Define all countries as a constant array
const allCountries = [
  "Argentina",
  "Azerbaijan",
  "Bolivia",
  "Belarus",
  "Chile",
  "Colombia",
  "Kazakhstan",
  "Malaysia",
  "Peru",
  "Philippines",
  "Russia",

  "Ukraine",
  "Uruguay",
  "Venezuela",
  "Ecuador",
  "Indonesia",

  "Mexico",
  "Belgium",
  "Egypt",
  "Finland",

  "Cambodia",
  "Luxembourg",
  "Sweden",
  "Thailand",
  "Albania",
  "Austria",
  "Brazil",

  "Denmark",
  "Croatia",
  "Israel",
  "Italy",

  "Lebanon",
  "North Macedonia",
  "Netherlands",
  "Oman",
  "Portugal",
  "Serbia",
  "Slovakia",
  "Bulgaria",
  "China",
  "Estonia",
  "Spain",
];

// Sidebar component with props for handling filters
const Sidebar = ({
  selectedGenres,
  setSelectedGenres,
  selectedLanguages,
  setSelectedLanguages,
  selectedCountries,
  setSelectedCountries,
}) => {
  // Function to handle genre selection
  const handleGenreChange = (genre) => {
    // Toggle genre selection based on current state
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Function to handle language selection
  const handleLanguageChange = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  // State for storing remaining countries when "Others" is selected
  const [remainingCountries, setRemainingCountries] = useState([]);

  // Function to handle country selection
  const handleCountryChange = (country) => {
    if (country === "others") {
      // Check if "Others" is selected
      if (selectedCountries.length === allCountries.length) {
        // Uncheck all countries when "Others" is unchecked
        setSelectedCountries([]);
        setRemainingCountries([]);
      } else {
        const allOtherCountries = allCountries.filter(
          (c) => !selectedCountries.includes(c.toLowerCase())
        );
        setRemainingCountries(allOtherCountries);
        setSelectedCountries([
          ...selectedCountries,
          ...allOtherCountries.map((c) => c.toLowerCase()),
        ]);
      }
    } else {
      // Toggle country selection based on current state
      if (selectedCountries.includes(country)) {
        setSelectedCountries(selectedCountries.filter((c) => c !== country));
      } else {
        setSelectedCountries([...selectedCountries, country]);
      }
    }
  };

  // JSX for rendering the sidebar component
  return (
    <div
      className="my-5 p-3"
      style={{ boxShadow: "5px 5px 7px #1c1d1f, -2px 0px 7px #222527" }}
    >
      <div>
        <h4 className="text-center mb-3">Filters</h4>
      </div>
      <hr />
      <div>
        <h5 className="mb-2">Genres</h5>
        <div className="mb-2">
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="animation"
              id="animation"
              checked={selectedGenres.includes("animation")}
              onChange={() => handleGenreChange("animation")}
            />
            <label class="form-check-label" htmlFor="animation">
              Animation
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="action"
              id="action"
              checked={selectedGenres.includes("action")}
              onChange={() => handleGenreChange("action")}
            />
            <label class="form-check-label" htmlFor="action">
              Action
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              class="form-check-input"
              type="checkbox"
              value="adventure"
              id="adventure"
              checked={selectedGenres.includes("adventure")}
              onChange={() => handleGenreChange("adventure")}
            />
            <label class="form-check-label" htmlFor="adventure">
              Adventure
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="biography"
              id="biography"
              checked={selectedGenres.includes("biography")}
              onChange={() => handleGenreChange("biography")}
            />
            <label class="form-check-label" htmlFor="biography">
              Biography
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="comedy"
              id="comedy"
              checked={selectedGenres.includes("comedy")}
              onChange={() => handleGenreChange("comedy")}
            />
            <label class="form-check-label" htmlFor="comedy">
              Comedy
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="crime"
              id="crime"
              checked={selectedGenres.includes("crime")}
              onChange={() => handleGenreChange("crime")}
            />
            <label class="form-check-label" htmlFor="crime">
              Crime
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="drama"
              id="drama"
              checked={selectedGenres.includes("drama")}
              onChange={() => handleGenreChange("drama")}
            />
            <label class="form-check-label" htmlFor="drama">
              Drama
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="documentry"
              id="documentry"
              checked={selectedGenres.includes("documentry")}
              onChange={() => handleGenreChange("documentry")}
            />
            <label class="form-check-label" htmlFor="documentry">
              Documentry
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="fantasy"
              id="fantasy"
              checked={selectedGenres.includes("fantasy")}
              onChange={() => handleGenreChange("fantasy")}
            />
            <label class="form-check-label" htmlFor="fantasy">
              Fantasy
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="horror"
              id="horror"
              checked={selectedGenres.includes("horror")}
              onChange={() => handleGenreChange("horror")}
            />
            <label class="form-check-label" htmlFor="horror">
              Horror
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="mystery"
              id="mystery"
              checked={selectedGenres.includes("mystery")}
              onChange={() => handleGenreChange("mystery")}
            />
            <label class="form-check-label" htmlFor="mystery">
              Mystery
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="thriller"
              id="thriller"
              checked={selectedGenres.includes("thriller")}
              onChange={() => handleGenreChange("thriller")}
            />
            <label class="form-check-label" htmlFor="thriller">
              Thriller
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="romance"
              id="romance"
              checked={selectedGenres.includes("romance")}
              onChange={() => handleGenreChange("romance")}
            />
            <label class="form-check-label" htmlFor="romance">
              Romance
            </label>
          </div>
        </div>
        <h5 className="mb-2">Languages</h5>
        <div className="mb-2">
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="english"
              id="english"
              checked={selectedLanguages.includes("english")}
              onChange={() => handleLanguageChange("english")}
            />
            <label class="form-check-label" htmlFor="english">
              English
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="hindi"
              id="hindi"
              checked={selectedLanguages.includes("hindi")}
              onChange={() => handleLanguageChange("hindi")}
            />
            <label class="form-check-label" htmlFor="hindi">
              Hindi
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              class="form-check-input"
              type="checkbox"
              value="malayalam"
              id="malayalam"
              checked={selectedLanguages.includes("malayalam")}
              onChange={() => handleLanguageChange("malayalam")}
            />
            <label class="form-check-label" htmlFor="malayalam">
              Malayalam
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="tamil"
              id="tamil"
              checked={selectedLanguages.includes("tamil")}
              onChange={() => handleLanguageChange("tamil")}
            />
            <label class="form-check-label" htmlFor="tamil">
              Tamil
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="telugu"
              id="telugu"
              checked={selectedLanguages.includes("telugu")}
              onChange={() => handleLanguageChange("telugu")}
            />
            <label class="form-check-label" htmlFor="telugu">
              Telugu
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="kannada"
              id="kannada"
              checked={selectedLanguages.includes("kannada")}
              onChange={() => handleLanguageChange("kannada")}
            />
            <label class="form-check-label" htmlFor="kannada">
              Kannada
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="chinese"
              id="chinese"
              checked={selectedLanguages.includes("chinese")}
              onChange={() => handleLanguageChange("chinese")}
            />
            <label class="form-check-label" htmlFor="chinese">
              Chinese
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="japanese"
              id="japanese"
              checked={selectedLanguages.includes("japanese")}
              onChange={() => handleLanguageChange("japanese")}
            />
            <label class="form-check-label" htmlFor="japanese">
              Japanese
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="spanish"
              id="spanish"
              checked={selectedLanguages.includes("spanish")}
              onChange={() => handleLanguageChange("spanish")}
            />
            <label class="form-check-label" htmlFor="spanish">
              Spanish
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="korean"
              id="korean"
              checked={selectedLanguages.includes("korean")}
              onChange={() => handleLanguageChange("korean")}
            />
            <label class="form-check-label" htmlFor="korean">
              Korean
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="oriya"
              id="oriya"
              checked={selectedLanguages.includes("oriya")}
              onChange={() => handleLanguageChange("oriya")}
            />
            <label class="form-check-label" htmlFor="oriya">
              Oriya
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="bengali"
              id="bengali"
              checked={selectedLanguages.includes("bengali")}
              onChange={() => handleLanguageChange("bengali")}
            />
            <label class="form-check-label" htmlFor="bengali">
              Bengali
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="assamese"
              id="assamese"
              checked={selectedLanguages.includes("assamese")}
              onChange={() => handleLanguageChange("assamese")}
            />
            <label class="form-check-label" htmlFor="assamese">
              Assamese
            </label>
          </div>
        </div>
        <h5 className="mb-2">Countries</h5>
        <div className="mb-2">
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="india"
              id="india"
              checked={selectedCountries.includes("india")}
              onChange={() => handleCountryChange("india")}
            />
            <label class="form-check-label" htmlFor="india">
              India
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="australia"
              id="australia"
              checked={selectedCountries.includes("australia")}
              onChange={() => handleCountryChange("australia")}
            />
            <label class="form-check-label" htmlFor="australia">
              Australia
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              class="form-check-input"
              type="checkbox"
              value="canada"
              id="canada"
              checked={selectedCountries.includes("canada")}
              onChange={() => handleCountryChange("canada")}
            />
            <label class="form-check-label" htmlFor="canada">
              Canada
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="germany"
              id="germany"
              checked={selectedCountries.includes("germany")}
              onChange={() => handleCountryChange("germany")}
            />
            <label class="form-check-label" htmlFor="germany">
              Germany
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="france"
              id="france"
              checked={selectedCountries.includes("france")}
              onChange={() => handleCountryChange("france")}
            />
            <label class="form-check-label" htmlFor="france">
              France
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="united kingdom"
              id="united kingdom"
              checked={selectedCountries.includes("united kingdom")}
              onChange={() => handleCountryChange("united kingdom")}
            />
            <label class="form-check-label" htmlFor="united kingdom">
              United kingdom
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="ireland"
              id="ireland"
              checked={selectedCountries.includes("ireland")}
              onChange={() => handleCountryChange("ireland")}
            />
            <label class="form-check-label" htmlFor="ireland">
              Ireland
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="norway"
              id="norway"
              checked={selectedCountries.includes("norway")}
              onChange={() => handleCountryChange("norway")}
            />
            <label class="form-check-label" htmlFor="norway">
              Norway
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="united states"
              id="united states"
              checked={selectedCountries.includes("united states")}
              onChange={() => handleCountryChange("united states")}
            />
            <label class="form-check-label" htmlFor="united states">
              United States
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="kuwait"
              id="kuwait"
              checked={selectedCountries.includes("kuwait")}
              onChange={() => handleCountryChange("kuwait")}
            />
            <label class="form-check-label" htmlFor="kuwait">
              Kuwait
            </label>
          </div>
          <div class="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value="singapore"
              id="singapore"
              checked={selectedCountries.includes("singapore")}
              onChange={() => handleCountryChange("singapore")}
            />
            <label class="form-check-label" htmlFor="singapore">
              Singapore
            </label>
          </div>
          <div className="mb-2">
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                value="others"
                id="others"
                checked={selectedCountries.length === allCountries.length}
                onChange={() => handleCountryChange("others")}
              />
              <label className="form-check-label" htmlFor="others">
                Others
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
