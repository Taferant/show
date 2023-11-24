// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FavouritesPage from './Pages/FavouritePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
