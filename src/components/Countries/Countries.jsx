import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './style.css'

const Countries = () => {
    const [countries,setCountries]=useState([])

    const [visitedCountry,setVisitedCountry]=useState([])

    const handleVisitedCountry=country=>{
        setVisitedCountry(country)
        const newVisitedCountry=[...visitedCountry,country]
        setVisitedCountry(newVisitedCountry)

    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <h1>Visited : {visitedCountry.length}</h1>
            <ul>
                {
                    visitedCountry.map((country,idx)=> <li key={idx}>{country?.name?.common}</li>)
                }
            </ul>
            <div className="container">
            
            {
                countries.map((country,idx)=> <Country country={country} key={idx} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
            
        </div>
        </div>
    );
};

export default Countries;