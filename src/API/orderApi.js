import api from "./axiosConfig"; // שונה

const API_URL = "http://localhost:1234";
export const getOrders = async () => {
  const response = await api.get(`${API_URL}/orders`); // שונה
  return response.data;
};
export const getOrderById = async (orderId) => {
  const response = await api.get(`${API_URL}/orders/${orderId}`); // שונה
  return response.data;
};
export const addOrder = async (order) => {
  const response = await api.post(`${API_URL}/orders`, order); // שונה
  return response.data;
};
export const updateOrder = async (orderId, orderToUpdate) => {
  const response = await api.put(`${API_URL}/orders/${orderId}`, orderToUpdate); // שונה
  return response.data;
};
export const deleteOrder = async (orderId) => {
  const response = await api.delete(`${API_URL}/orders/${orderId}`); // שונה
  return response.data;
};
