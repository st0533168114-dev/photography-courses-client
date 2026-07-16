import api from "./axiosConfig"; // שונה

const API_URL = "http://localhost:1234";
export const getPayments = async () => {
  const response = await api.get(`${API_URL}/payments `); // שונה
  return response.data;
};
export const getPaymentById = async (paymentId) => {
  const response = await api.get(`${API_URL}/payments/${paymentId}`); // שונה
  return response.data;
};
export const addPayment = async (payment) => {
  const response = await api.post(`${API_URL}/payments`, payment); // שונה
  return response.data;
};
export const updatePayment = async (paymentId, paymentToUpdate) => {
  const response = await api.put(`${API_URL}/payments/${paymentId}`, paymentToUpdate); // שונה
  return response.data;
};
export const deletePayment = async (paymentId) => {
  const response = await api.delete(`${API_URL}/payments/${paymentId}`); // שונה
  return response.data;
};
