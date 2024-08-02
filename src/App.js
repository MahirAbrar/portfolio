import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introAnimated, setIntroAnimated] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroAnimated(true);
      setTimeout(() => setShowIntro(false), 1000); // Wait for animation to finish
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const selectPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="app">
      {showIntro ? (
        <h1 className={`intro ${introAnimated ? "animated" : ""}`}>
          Hello, My name is Mahir and I am a Software Engineer
        </h1>
      ) : (
        <div className="content">
          <div className="page-selection">
            <button onClick={() => selectPage("web")}>Web Development</button>
            <div className="divider">/</div>
            <button onClick={() => selectPage("data")}>Data Science</button>
          </div>
          {selectedPage && (
            <div className="selected-page">
              <h2>
                {selectedPage === "web" ? "Web Development" : "Data Science"}
              </h2>
              {/* Add content for each page here */}
            </div>
          )}
          <h3 className="footer">
            Hello, My name is Mahir and I am a Software Engineer
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
