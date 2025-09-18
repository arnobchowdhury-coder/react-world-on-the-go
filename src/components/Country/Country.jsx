import React, { useState } from 'react';
import "./Country.css"

const Country = ({ country }) => {
  //console.log(country.area.area)
  const [Visited, setVisited] = useState(false);


  const handleVisited = () => {
    //1st system
    // if (Visited) {
    //   setVisited(false); 
    // }
    // else {
    //   setVisited(true); 
    // }
    
    //Second system
    // setVisited(Visited ? false : true); 
    
    //3rd system
    setVisited(!Visited); 
  }

  return (
    //<div className={`country border-lg text-center ${Visited ? 'country-visited': 'country-not-visited'}`}>
     <div className={`country ${Visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name:{country.name.common} </h3>
      <p>Population:{country.population.population}</p>
      <p>Area:{country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
      <button onClick={handleVisited}>
        { Visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;


/**
 * 1. inline css (style object)
 * 2. 
 * 
 * 
 */