import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data))
      .catch(error => console.log({ error }));
  }, []);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {countries.map(country => {
        return (
          <div key={country.name}>
            <h3>{country.name}</h3>
            <h4>{country.capital}</h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
