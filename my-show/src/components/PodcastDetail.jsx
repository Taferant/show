// PodcastDetail.js
/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState({});

  useEffect(() => {
    const fetchPodcastDetails = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/id/${id}');
        const data = await response.json();
        setPodcast(data);
      } catch (error) {
        console.error('Error fetching podcast details:', error);
      }
    };

    fetchPodcastDetails();
  }, [id]);

  return (
    <div>
      <h2>{podcast.title}</h2>
      {/* Render other podcast details here *///}
   // </div>
  //);
//};

//export default PodcastDetail;*/

// src/components/PodcastDetails.jsx
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const fetchPodcastDetails = async (id) => {
  const response = await fetch('https://podcast-api.netlify.app/id/${id}');
  return response.json();
};

function PodcastDetails() {
  const { id } = useParams();
  const { data: podcast, isLoading, isError } = useQuery(['podcast', id], () => fetchPodcastDetails(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching podcast details</div>;
  }

  return (
    <div className="podcast-details">
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      {/* Add more details like season, episode, genre, and audio preview */}
    </div>
  );
}

export default PodcastDetails;
