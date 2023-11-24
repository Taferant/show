// PodcastList.js
import React, { useEffect, useState } from 'react';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        const data = await response.json();
        setPodcasts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>{podcast.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
