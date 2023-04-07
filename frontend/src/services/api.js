import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/users`, user);
  return response.data;
};

export const updateUser = async (userId, user) => {
  const response = await axios.put(`${BASE_URL}/users/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  return response.data;
};

export const getLocations = async () => {
  const response = await axios.get(`${BASE_URL}/locations`);
  return response.data;
};

export const createLocation = async (location) => {
  const response = await axios.post(`${BASE_URL}/locations`, location);
  return response.data;
};

export const updateLocation = async (locationId, location) => {
  const response = await axios.put(`${BASE_URL}/locations/${locationId}`, location);
  return response.data;
};

export const deleteLocation = async (locationId) => {
  const response = await axios.delete(`${BASE_URL}/locations/${locationId}`);
  return response.data;
};

export const getUserChartData = async () => {
  const response = await axios.get(`${BASE_URL}/user-chart-data`);
  return response.data;
};
