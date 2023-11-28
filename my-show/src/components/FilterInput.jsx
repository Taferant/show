// import React, { useState, useEffect } from 'react';
// import api from '../Services/api';

// const FilterInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [filteredShows, setFilteredShows] = useState([]);

//   useEffect(() => {
//     // Fetch all shows initially
//     const fetchAllShows = async () => {
//       try {
//         const response = await api.getShows();
//         setFilteredShows(response);
//       } catch (error) {
//         console.error('Error fetching shows:', error);
//       }
//     };

//     fetchAllShows();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // Filter shows based on the input value
//     const filtered = filteredShows.filter((show) =>
//       show.title.toLowerCase().includes(value.toLowerCase())
//     );

//     setFilteredShows(filtered);
//   };

//   return (
//     <div>
//       <h2>Filter Shows</h2>
//       <input
//         type="text"
//         placeholder="Search shows..."
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {filteredShows.map((show) => (
//           <li key={show.id}>
//             <img src={show.thumbnail} alt={show.title} />
//             <h3>{show.title}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilterInput;

// Update your existing components with these styles and add the search button

// FilterInput.js
import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import '../components/FilterImput.css'


const FilterInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
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

    const filtered = filteredShows.filter((show) =>
      show.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredShows(filtered);
  };

  const handleSearch = () => {
    // Add your search logic here
    console.log('Search clicked with value:', inputValue);
  };

  return (
    <div id="filter-input">
      <h2>Filter Shows</h2>
      <input
        type="text"
        placeholder="Search shows..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button id="search-button" onClick={handleSearch}>Search</button>
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

