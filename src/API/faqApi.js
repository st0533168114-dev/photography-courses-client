import api from "./axiosConfig";

const API_URL = "http://localhost:1234";

export const getFaqs = async () => {
  const response = await api.get(`${API_URL}/faq`);
  return response.data;
};

export const getFaqById = async (faqId) => {
  const response = await api.get(`${API_URL}/faq/${faqId}`);
  return response.data;
};

export const addFaq = async (faq) => {
  const response = await api.post(`${API_URL}/faq`, faq);
  return response.data;
};

export const updateFaq = async (faqId, faqToUpdate) => {
  const response = await api.put(`${API_URL}/faq/${faqId}`, faqToUpdate);
  return response.data;
};

export const deleteFaq = async (faqId) => {
  const response = await api.delete(`${API_URL}/faq/${faqId}`);
  return response.data;
};
