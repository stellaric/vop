// api.js

import axios from 'axios';

// Créez une instance Axios avec l'URL de base de votre backend
const instance = axios.create({
  baseURL: 'https://localhost:8080/', // Remplacez par l'URL de votre backend
});

export default instance;
