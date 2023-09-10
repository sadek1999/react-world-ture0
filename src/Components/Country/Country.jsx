import { useState } from 'react';
import './country.css'

const Country = ({country ,handleVisitedcountry}) => {
    const [visit,setVisit]=useState(false);
    const handleVisit =()=>{
        setVisit(!visit)
    }

    console.log(handleVisitedcountry)
    const {name,flags}=country;
    return (
        <div className={`country ${visit&& 'visit'}`}>
            <h3>name :{name.common}</h3>
            <img src={flags.png} alt="" />
            <button onClick={handleVisit}>{visit?'Visited':'Going'}</button>
            {visit? "I visit the country":'i want to visit the country'}
            <br />
            <button>MarK to visit</button>
            
        </div>
    );
};

export default Country;