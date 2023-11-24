// services/api.js
const BASE_URL = 'https://podcast-api.netlify.app';

const api = {
  getShows: async () => {
    try {
      const response = await fetch(`${BASE_URL}/shows`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching shows:', error);
      throw error;
    }
  },

  getShowById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/id/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching show with ID ${id}:`, error);
      throw error;
    }
  },

  getGenreById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/genre/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching genre with ID ${id}:`, error);
      throw error;
    }
  },
};

export default api;
