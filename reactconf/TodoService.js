// src/todoService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/"; // Replace with your actual API URL

export const getTodosByUsername = (username) => {
  return axios.get(`${API_URL}/todos/${username}`);
};

export const getTodoById = (id) => {
  return axios.get(`${API_URL}/todo/${id}`);
};

export const createTodo = (todo) => {
  return axios.post(`${API_URL}/todo`, todo);
};

export const updateTodo = (id, todo) => {
  return axios.post(`${API_URL}/todo`, { ...todo, id });
};

export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/todo`, { data: { id } });
};
