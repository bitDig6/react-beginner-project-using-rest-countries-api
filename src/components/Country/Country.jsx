import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const colorVisited = {
        backgroundColor: visited ? 'bisque' : 'white'
    }

    return (
        <div style={colorVisited} className="country-container">
            <img src={country.flags.png} alt="" />
            <h4>Country Name: {country.name.common}</h4>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} square kilometers</p>
            <p>Population: {country.population}</p>
            <div className='button-container'>
                <button onClick={handleVisited}>
                    {visited ? 'Visited' : 'Going'}
                </button>
            </div>
        </div>
    );
};

export default Country;