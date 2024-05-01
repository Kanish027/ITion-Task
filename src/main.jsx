import React from "react"; // Import React library for JSX usage
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import App from "./App.jsx"; // Import main App component
import "./index.css"; // Import custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Render the main React component to the root element using ReactDOM.createRoot
// StrictMode is used for highlighting potential issues in the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);
