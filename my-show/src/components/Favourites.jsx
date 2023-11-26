import React, { useState, useEffect } from 'react';
import api from '../Services/api';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch favourites from a hypothetical user's data in a real application
    // For simplicity, let's assume favourites are stored in local storage
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const addToFavourites = async (showId) => {
    try {
      // Fetch the details of the show by ID
      const showDetails = await api.getShowById(showId);

      // Update the favourites state
      setFavourites((prevFavourites) => [...prevFavourites, showDetails]);

      // Save favourites to local storage
      localStorage.setItem('favourites', JSON.stringify([...favourites, showDetails]));
    } catch (error) {
      console.error('Error adding to favourites:', error);
    }
  };

  const removeFromFavourites = (showId) => {
    // Update the favourites state
    setFavourites((prevFavourites) => prevFavourites.filter((show) => show.id !== showId));

    // Save favourites to local storage
    localStorage.setItem('favourites', JSON.stringify(favourites.filter((show) => show.id !== showId)));
  };

  return (
    <div>
      <h2>Your Favourites</h2>
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((show) => (
            <li key={show.id}>
              <img src={show.thumbnail} alt={show.title} />
              <h3>{show.title}</h3>
              <button onClick={() => removeFromFavourites(show.id)}>Remove from Favourites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourites yet.</p>
      )}
    </div>
  );
};

export default Favourites;
