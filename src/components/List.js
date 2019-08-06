import React from 'react'

function List(props) {
  return (
    <ul>
      {props.cities.map((city, index)=>{
            return (
            <li key={index}>
              <p>{city.name}</p>
              <p>{city.population}</p>
            </li>
          );
        })}
    </ul>
  )
}

export default List; 
