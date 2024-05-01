import { useState } from "react"; // Import useState hook for managing state
import Main from "./Components/Main"; // Import Main component
import Sidebar from "./Components/Sidebar"; // Import Sidebar component

function App() {
  // Define state variables using useState hook
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        {/* Render Sidebar component */}
        <div className="col-lg-2">
          <Sidebar
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
          />
        </div>
        {/* Render Main component */}
        <div className="col-lg-10">
          <Main
            selectedGenres={selectedGenres}
            selectedLanguages={selectedLanguages}
            selectedCountries={selectedCountries}
          />
        </div>
      </div>
    </div>
  );
}

export default App; // Export App component as the default export
