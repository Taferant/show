// Genre.js
/*
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Genre = () => {
  const { id } = useParams();
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/genre/${id}');
        const data = await response.json();
        setGenreData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Genre: {id}</h2>
      {/* Render your data here */}
    </div>
  );
};

export default Genre;
