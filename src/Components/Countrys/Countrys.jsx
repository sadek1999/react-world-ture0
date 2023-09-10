import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countrys.css'



const Countrys = () => {
    const [countrys,setCountrys]=useState([]);
    const [visitedCountry,setVisitedCountry]=useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountrys(data))
    },[])
    
    const handleVisitedcountry=country=>{
        console.log(country)
        const newVisitstedCountry=[...visitedCountry,country];

        setVisitedCountry(newVisitstedCountry)
    }
    const [visitFlag,setFlags]=useState([]);
    const handleFlag=flags=>{
        const newFlags=[...visitFlag,flags];
        setFlags(newFlags);
    }
    
    return (
        <div >
            <h3>Countrys :{countrys.length}</h3>
            <div>
                <h3>visited country list :{visitedCountry.length}</h3>
                <ul>
                    {
                        visitedCountry.map(country=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag">
               
               {
                visitFlag.map(flag=><img src={flag}></img>)
               }
            </div>
            <div className="box">
            {
                countrys.map(c=><Country key={c.cca3}
                    handleVisitedcountry={handleVisitedcountry}
                    handleFlag={handleFlag}
                   
                     country={c}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;