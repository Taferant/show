// Show.js

import React from 'react';
import { useParams } from 'react-router-dom';
import PodcastDetail from '../components/PodcastDetail';

const Show = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Show Details</h2>
      <PodcastDetail id={id} />
    </div>
  );
};

export default Show;

