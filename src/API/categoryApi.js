import api from "./axiosConfig"; // שונה

const API_URL = "http://localhost:1234";
export const getCategories = async () => {
  const response = await api.get(`${API_URL}/categories`); // שונה
  return response.data;
};
export const getCategoryById = async (categoryId) => {
  const response = await api.get(`${API_URL}/categories/${categoryId}`); // שונה
  return response.data;
};
export const addCategory = async (category) => {
  const response = await api.post(`${API_URL}/categories`, category); // שונה
  return response.data;
};
export const updateCategory = async (categoryId, categoryToUpdate) => {
  const response = await api.put(`${API_URL}/categories/${categoryId}`, categoryToUpdate); // שונה
  return response.data;
};
export const deleteCategory = async (categoryId) => {
  const response = await api.delete(`${API_URL}/categories/${categoryId}`); // שונה
  return response.data;
};
