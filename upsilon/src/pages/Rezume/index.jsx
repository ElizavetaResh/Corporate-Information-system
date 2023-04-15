import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RezumeCard from '../../app/components/Rezume';

function Rezume() {
  const [rezumes, setRezumes] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:8080/api/rezume')
      .then(response => {
        setRezumes(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Rezume</h2>
      {Array.from(rezumes).map(rezume => (
        <RezumeCard key={rezume.id} rezume={rezume}/>
      ))}
    </div>
  );
}

export default Rezume;