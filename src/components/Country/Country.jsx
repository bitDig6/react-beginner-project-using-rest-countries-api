import './Country.css'
const Country = ({country}) => {
    console.log(country);
    return (
        <div className="country-container">
            <img src={country.flags.png} alt="" />
            <h4>Country Name: {country.name.common}</h4>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} square kilometers</p>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;