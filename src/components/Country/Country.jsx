import { useState } from 'react';
import './style2.css'
const Country = ({country}) => {
    const {name,flags,area,population}=country;

    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className='container2'>
            <div>
            <h4>{name?.common}</h4>
            <button className='visited-btn' onClick={handleVisited}>Visited</button>
            <p>
                {visited? 'I have visit this country':'I want to viait!'}
            </p>
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