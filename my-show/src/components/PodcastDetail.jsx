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
      <img src={podcast.thumbnail} alt={podcast.title} />
      <p>{podcast.description}</p>
      {/* Render other podcast details as needed */}
    </div>
  );
};

export default PodcastDetail;
