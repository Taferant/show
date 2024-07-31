import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Services/api';
import Favourites from '../components/Favourites';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    const fetchPodcastDetails = async () => {
      try {
        const response = await api.getShowById(id);
        setPodcast(response);
      } catch (error) {
        console.error('Error fetching podcast details:', error);
      }
    };

    fetchPodcastDetails();
  }, [id]);

  if (!podcast) {
    return <div>Loading...</div>;
  }

  const addToFavourites = async () => {
    try {
      const showDetails = await api.getShowById(id);
      setFavourites((prevFavourites) => [...prevFavourites, showDetails]);
    } catch (error) {
      console.error('Error adding to favourites:', error);
    }
  };

  return (
    <div>
      <h2>{podcast.title}</h2>
      <img src={podcast.image} alt={podcast.title} />
      <p>{podcast.description}</p>

      <h3>Seasons</h3>
      <ul>
        {podcast.seasons.map((season) => (
          <li key={season.id}>
            <p>{season.title}</p>
            
            <h4>Episodes</h4>
            <ul>
              {season.episodes.map((episode) => (
                <li key={episode.id}>
                  <p>{episode.title}</p>
                  {/* Render other episode details as needed */}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={addToFavourites}>Add to Favourites</button>
    </div>
  );
};

export default PodcastDetail;
