const CountryData = ({cca2, cca3, ccn3, cioc}) => {
    return (
        <div>
            <h5>Country Data:</h5>
            <p>CCA2 Code: {cca2}</p>
            <p>CCA3 Code: {cca3}</p>
            <p>CCN3 Code: {ccn3}</p>
            <p>CIOC Code: {cioc}</p>

        </div>
    );
};

export default CountryData;