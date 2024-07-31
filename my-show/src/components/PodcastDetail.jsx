
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Services/api';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    // Fetch podcast details based on the ID from the URL
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
                  <p>{episode.description}</p>
                  <audio controls>
                    <source src={episode.audio} type="audio/mpeg" />
                    
                  </audio>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastDetail;

