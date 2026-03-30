import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentCat, setCurrentCat] = useState(null);
  const [banList, setBanList] = useState([]); // banned origins (lowercase)
  const [history, setHistory] = useState([]); // previously seen cats

  const discoverCat = async () => {
    console.log("Discover clicked");
    try {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1"
      );
      const data = await res.json();

      // If nothing came back at all
      if (!Array.isArray(data) || data.length === 0) {
        alert("No cats returned. Try again.");
        return;
      }

      const banned = banList.map((b) => b.toLowerCase());

      // Try to respect ban list, but fall back if it removes everything
      let pool = data;

      if (banned.length > 0) {
        const filtered = data.filter((cat) => {
          const breed = Array.isArray(cat.breeds) ? cat.breeds[0] : null;
          if (!breed) return true; // keep cats without breed info
          const origin = (breed.origin || "").toLowerCase();
          return !origin || !banned.includes(origin);
        });

        if (filtered.length > 0) {
          pool = filtered;
        }
      }

      // Pick random cat
      const randomCat = pool[Math.floor(Math.random() * pool.length)];
      const breed =
        Array.isArray(randomCat.breeds) && randomCat.breeds.length > 0
          ? randomCat.breeds[0]
          : {
              name: "Unknown",
              weight: { metric: "" },
              origin: "Unknown",
              life_span: "?",
            };

      const catData = {
        image: randomCat.url,
        name: breed.name,
        weight: breed.weight?.metric || "",
        origin: breed.origin,
        lifespan: breed.life_span,
      };

      setCurrentCat(catData);
      setHistory((prev) => [catData, ...prev]);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Error fetching cat. Check the console.");
    }
  };

  const toggleBan = (origin) => {
    if (!origin) return;
    const lower = origin.toLowerCase();
    setBanList((prev) =>
      prev.includes(lower)
        ? prev.filter((item) => item !== lower)
        : [...prev, lower]
    );
  };

  return (
    <div className="whole-page">
      <h1>Trippin&apos; on Cats</h1>
      <h3>Discover cats from your wildest dreams!</h3>
      <div className="emoji-row">😺😸😹😻😼😽🙀😿😾</div>
      <br />
      <br />

      {/* main listing + Discover button */}
      <div className="discover-container">
        <div className="listing-container">
          {currentCat ? (
            <>
              <h2>{currentCat.name}</h2>
              <div className="buttons">
                <button
                type="button"
                className="attribute-buttons"
                onClick={() => toggleBan(currentCat.name)}
                title="Click to add/remove this breed from the ban list"
                >
                  {currentCat.name}
                  </button>
                  <button type="button" className="attribute-buttons">
                    {currentCat.weight} lbs
                    </button>
                    <button
                    type="button"
                    className="attribute-buttons"
                    onClick={() => toggleBan(currentCat.origin)}
                    title="Click to add/remove this origin from the ban list"
                    >
                      {currentCat.origin}
                      </button>
                      <button type="button" className="attribute-buttons">
                        {currentCat.lifespan} years
                        </button>
                        </div>
              <br />
              <img
                className="cat-pic"
                src={currentCat.image}
                alt={`Cat named ${currentCat.name}`}
                height="250"
                width="250"
              />
            </>
          ) : (
            <p className="hint-text">Click Discover! to see your first cat.</p>
          )}
        </div>

        <br />
        <button
          type="button"
          className="discover-btn"
          onClick={discoverCat}
        >
          🐾 Discover!
        </button>
      </div>

      {/* ban list */}
      <div className="sideNav">
        <h2>Ban List</h2>
        <h4>Select an attribute in your listing to ban it</h4>
        {banList.length === 0 ? (
          <p className="hint-text">
            No banned origins yet. Click the origin button to add one.
          </p>
        ) : (
          <ul className="ban-list">
            {banList.map((origin) => (
              <li key={origin}>
                <button
                  className="ban-chip"
                  onClick={() => toggleBan(origin)}
                >
                  {origin}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* history sidebar */}
      <div className="history-sidebar">
        <h2>Who have we seen so far?</h2>
        <div className="history-container">
          {history.length === 0 ? (
            <p className="hint-text">
              None yet! Discover some cats to fill this list.
            </p>
          ) : (
            history.map((cat, index) => (
              <li key={index}>
                <img
                  className="cat-pic history-pic"
                  src={cat.image}
                  alt={`Cat named ${cat.name}`}
                  width="50"
                  height="50"
                />
                <p>{cat.name}</p>
              </li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;