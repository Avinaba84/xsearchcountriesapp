import React, { useState, useEffect } from "react";

const Card = ({ name, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        width: "150px",
        border: "0.5px solid black",
        borderRadius: "4px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{ width: "100px", height: "100px" }}
      />
      <h5>{name}</h5>
    </div>
  );
};

const API_ENDPOINT = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_ENDPOINT);
        const jsonRes = await res.json();
        setCountries(jsonRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter countries based on search text
  const filteredCountries = countries.filter(({ common }) =>
    common.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div style={{ paddingBottom: "2%" }}>
        <input
          type="text"
          placeholder="Search for Countries"
          style={{ width: "40%", marginLeft: "30%", marginRight: "30%" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {filteredCountries.map(({ common, png }, index) => (
          <Card name={common} flag={png} key={index} />
        ))}
      </div>
    </div>
  );
}
