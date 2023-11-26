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
              <img src={podcast.thumbnail} alt={podcast.title} />
              <h3>{podcast.title}</h3>
            </Link>
            {/* Render other podcast details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
