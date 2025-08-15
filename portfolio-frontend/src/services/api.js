import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

/* export const getProjects = async () => {
  const { data } = await api.get('/api/projects');
  return data;
}; */

export const getSkills = async () => {
  const { data } = await api.get('/api/skills');
  return data;
};

export const getProjects = async () => {
  console.log("Fetching from:", import.meta.env.VITE_API_URL + '/api/projects');
  const { data } = await api.get('/api/projects');
  return data;
};


export default api;
