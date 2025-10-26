import { use } from "react";
import Country from "../country/country";
import './countries.css'

const countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <>
      <h2 className="center">Total countries: {countries.length}</h2>
    <div className="countries">
      {countries.map((country) => (
        <Country  key={country.ccn3} country={country}></Country>
      ))}
    </div>
    </>
    
  );
};

export default countries;
