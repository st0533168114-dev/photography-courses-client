import api from "./axiosConfig"; // שונה

const API_URL = "http://localhost:1234";
export const getCourses = async () => {
  const response = await api.get(`${API_URL}/courses`); // שונה
  return response.data;
};
export const getCourseById = async (courseId) => {
  const response = await api.get(`${API_URL}/courses/${courseId}`); // שונה
  return response.data;
};
export const addCourse = async (course) => {
  const response = await api.post(`${API_URL}/courses`, course); // שונה
  return response.data;
};
export const updateCourse = async (courseId, courseToUpdate) => {
  const response = await api.put(`${API_URL}/courses/${courseId}`, courseToUpdate); // שונה
  return response.data;
};
export const deleteCourse = async (courseId) => {
  const response = await api.delete(`${API_URL}/courses/${courseId}`); // שונה
  return response.data;
};
