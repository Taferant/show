import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import api from '../Services/api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch the list of shows
    const fetchShows = async () => {
      try {
        const response = await api.getShows();
        setShows(response);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div>
      <h1>Featured Shows</h1>
      <Slider {...settings}>
        {shows.map((show) => (
          <div key={show.id}>
            <img src={show.image} alt={show.title} />
            <h2>{show.title}</h2>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
