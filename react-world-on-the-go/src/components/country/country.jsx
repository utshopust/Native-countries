import React from 'react';

const country = ({country}) => {
    console.log(country)
    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free' }</p>
            <p>Population: {country.population > 12505445 ? 'Big Country' : 'Small Country' }</p>
        </div>
    );
};

export default country;