// Home.js

import React from 'react';
import PodcastList from '../components/PodcastList';
import Carousel from '../components/Carousel';


const Home = () => {
  return (
    <div>
      <h2>Welcome to the Podcast App</h2>
      <Carousel />
      <PodcastList />
    </div>
  );
};

export default Home;
