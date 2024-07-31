// Home.js

import React from 'react';
import PodcastList from '../components/PodcastList';
import Carousel from '../components/Carousel';
import FilterInput from '../components/FilterInput';
import Genre from './Genre';
import AudioPlayer from '../components/AudioPlayer';



const Home = () => {
  return (
    <div>
      <h2>Welcome to the Podcast App</h2>
      <Carousel />
      <PodcastList/>
     <Genre/>
      <FilterInput/>
      <AudioPlayer/>
    </div>
  );
};

export default Home;

