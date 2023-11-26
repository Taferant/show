import React, { useState, useEffect } from 'react';
import api from '../Services/api';

const FilterInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    // Fetch all shows initially
    const fetchAllShows = async () => {
      try {
        const response = await api.getShows();
        setFilteredShows(response);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchAllShows();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter shows based on the input value
    const filtered = filteredShows.filter((show) =>
      show.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredShows(filtered);
  };

  return (
    <div>
      <h2>Filter Shows</h2>
      <input
        type="text"
        placeholder="Search shows..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredShows.map((show) => (
          <li key={show.id}>
            <img src={show.thumbnail} alt={show.title} />
            <h3>{show.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterInput;
