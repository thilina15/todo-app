import axios from 'axios';

const API_URL = 'http://localhost:4000/tasks'; // Change if your backend URL is different

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (title, description) => {
  await axios.post(API_URL,title);
};

export const markTaskAsDone = async (taskId) => {
  await axios.patch(`${API_URL}/${taskId.id}/done`, { });
};
