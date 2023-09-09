import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countrys = () => {
    const [countrys,setCountrys]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountrys(data))
    },[]);

    return (
        <div>
            <h3>country : {countrys.length}</h3>
            {
              countrys.map(country=> <Country
                key={country.cca3} 
              country={country}></Country>) 
            }
        </div>
    );
};

export default Countrys;