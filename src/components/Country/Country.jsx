import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountries}) => {
    console.log(country);

    const [visited, setVisited] = useState(false);
    
    const colorVisited = {
        backgroundColor: visited ? 'bisque' : 'white'
    }

    const handleVisited = () => {
        setVisited(!visited);
    }      

    return (
        <div style={colorVisited} className="country-container">
            <img src={country.flags.png} alt="" />
            <h4>Country Name: {country.name.common}</h4>
            <CountryDetail country={country}></CountryDetail>
            <div onClick={() => {handleVisitedCountries(country)}} className='button-container'>
                <button>Mark Visited</button>
            </div>
            <div className='button-container'>
                <button onClick={handleVisited}>
                    {visited ? 'Visited' : 'Going'}
                </button>
                <p>{visited ? 'Already Visited this country' : 'I want to visit this country'}</p>
            </div>
        </div>
    );
};

export default Country;