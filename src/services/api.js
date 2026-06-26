import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Gestion automatique des erreurs
api.interceptors.response.use(
  response => response,
  error => {
    console.error("Erreur API :", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
