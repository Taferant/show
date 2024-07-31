import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Fetch the list of podcasts
    const fetchPodcasts = async () => {
      try {
        const response = await api.getShows();
        setPodcasts(response);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <div>
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <Link to={`/show/${podcast.id}`}>
              <img src={podcast.image} alt={podcast.title} />
              <h3>{podcast.title}</h3>
            </Link>
            <p>{podcast.description}</p>
            <p>Genres: {podcast.genres.map(genre => genre).join(', ')}</p>
            {podcast.preview && (
              <div>
                <audio controls>
                  <source src={podcast.preview} type="audio/mpeg" />
                  
                </audio>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;


