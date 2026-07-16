//   אם זה עובד-לבדוקקקקק!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//import axios from "axios";
import api from "./axiosConfig";

const API_URL = "http://localhost:1234";

export const loginUser = async (credentials) => {
  const response = await api.post(`${API_URL}/users/login`, credentials);
  if (response.data && response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};
export const addUser = async (user) => {
  const response = await api.post(`${API_URL}/users`, user); // שונה מ-axios ל-api
  if (response.data && response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get(`${API_URL}/users`);
  return response.data;
};
export const getUserById = async (userId) => {
  const response = await api.get(`${API_URL}/users/${userId}`); // שונה מ-axios ל-api
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get(`${API_URL}/users/profile`);
  return response.data;
};

export const updateUser = async (userId, userToUpdate) => {
  const response = await api.put(`${API_URL}/users/${userId}`, userToUpdate); // שונה מ-axios ל-api
  return response.data;
};
export const deleteUser = async (userId) => {
  const response = await api.delete(`${API_URL}/users/${userId}`); // שונה מ-axios ל-api
  return response.data;
};
