// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import FavouritesPage from './Pages/FavouritePage';
import PodcastList from './components/PodcastList';
import PodcastDetail from './components/PodcastDetail';
import Show from './Pages/Show';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/shows" element={<PodcastList />} />
        <Route path="/show/:id" element={<PodcastDetail />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
