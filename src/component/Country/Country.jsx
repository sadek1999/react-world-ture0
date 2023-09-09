import "./country.css"

const Country = ({country}) => {
    console.log(country)
    const {name,capital,flags}=country;
    return (
        <div className="country">
           
          <h3>Name : {name.common}</h3>
          <h5>Capital : {capital}</h5>
          <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;