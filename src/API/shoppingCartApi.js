//import axios from "axios";
import api from "./axiosConfig";

const API_URL = "http://localhost:1234";

export const getAllShoppingCarts = async () => {
  const response = await api.get(`${API_URL}/shoppingCarts/admin/all`);
  return response.data;
};
export const getShoppingCart = async () => {
  const response = await api.get(`${API_URL}/shoppingCarts`);
  return response.data;
};
// export const addShoppingCart=async(shoppingCart)=>{
// const response=await axios.post(`${API_URL}/shoppingCarts`,shoppingCart);
// return response.data;
// }
// export const updateShoppingCart=async (shoppingCartId,shoppingCartToUpdate)=>{
//     const response=await axios.put(`${API_URL}/shoppingCarts/${shoppingCartId}`,shoppingCartToUpdate);
//     return response.data;
// }

export const clearShoppingCart = async () => {
  const response = await api.delete(`${API_URL}/shoppingCarts/items`);
  return response.data;
};

export const addToShoppingCart = async (courseId) => {
  const response = await api.post(`${API_URL}/shoppingCarts/items`, { courseId });
  return response.data;
};
export const removeFromShoppingCart = async (courseId) => {
  const response = await api.delete(`${API_URL}/shoppingCarts/items/${courseId}`);
  return response.data;
};
