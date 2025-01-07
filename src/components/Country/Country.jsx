import { useState } from 'react';
import './style2.css'
const Country = ({country,handleVisitedCountry}) => {
    const {name,flags,area,population}=country;

    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className='container2'>
            <div>
            <h4>{name?.common}</h4>
            <button className={visited?'visited-btn-true': 'visited-btn'} onClick={handleVisited}>Visited</button>
            <p>
                {visited? 'I have visit this country':'I want to visit!'}
            </p>
            <button className='mark-visited' onClick={()=>handleVisitedCountry(country)}>Mask As Visited</button>
            </div>
            <div className='img-width'>
            <img className='img-width' src={flags?.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            </div>
        </div>
    );
};

export default Country;