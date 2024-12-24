import { useState } from "react";
import { useEffect } from "react";
import './Countries.css'
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = country => {
        // console.log('visited here');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h3>Number of Countries You Have Visited: {visitedCountries.length}</h3>
            <p>List of your Visited Countries:</p>
            <ul>
                {visitedCountries.map( (visitedCountry, idx) => <li key={idx}>{visitedCountry.name.common}</li>)}
            </ul>
            <div className="countries-container">
            {
                countries.map( country => <Country 
                    key={country.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;