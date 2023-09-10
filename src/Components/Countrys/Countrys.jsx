import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countrys.css'


const Countrys = () => {
    const [countrys,setCountrys]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountrys(data))
    },[])
    const [visitedCountry,setVisitedCountry]=useState([])
    const handleVisitedcountry=country=>{
        setVisitedCountry(country)
    }
    return (
        <div >
            <h3>Countrys :{countrys.length}</h3>
            <div>
                <h3>visited country list</h3>
            </div>
            <div className="box">
            {
                countrys.map(c=><Country key={c.cca3}
                    handleVisitedcountry={handleVisitedcountry}
                     country={c}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;