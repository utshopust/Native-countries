import React, { use, useState } from "react";
import Country from "../country/country";
import "./countries.css";

const countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("country visited clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <h2 className="center">Total countries: {countries.length}</h2>
      <h3>Traveled So Far: {visitedCountries.length}</h3>
      <ol>
         {
          visitedCountries.map(country=><li>{country.name.common}</li>)
         }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default countries;
