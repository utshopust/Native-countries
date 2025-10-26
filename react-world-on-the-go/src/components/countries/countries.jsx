
import { use } from "react";
import Country from "../country/country";

const countries = ({ countriesPromise }) => {
 const countries = use(countriesPromise)
  

  return (
    <div>
      <h2>Traveling countries: {countries.length}</h2>
      {countries.map((country) => (
        <Country key={country.ccn3} country={country}></Country>
      ))}
    </div>
  );
};

export default countries;
