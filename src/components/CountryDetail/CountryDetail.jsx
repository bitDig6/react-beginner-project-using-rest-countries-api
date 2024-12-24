import CountryData from "../CountryData/CountryData";

const CountryDetail = ({country}) => {
    return (
        <div>
            <h5>Country Details: </h5>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} square kilometers</p>
            <p>Population: {country.population}</p>
            <CountryData {...country}></CountryData>
        </div>
    );
};

export default CountryDetail;