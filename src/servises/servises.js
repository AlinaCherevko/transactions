import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getAllTransactions = async () => {
  const { data } = await axios.get(`${BASE_URL}/transactions`);
  return data;
};
export const getTransactionById = async (id) => {
  const result = await axios.get(`${BASE_URL}/transactions/${id}`);
  return result;
};
export const addAllTransactions = async (formData) => {
  const result = await axios.post(`${BASE_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result;
};
export const updateTransactionStatus = async ({ id, status }) => {
  const result = await axios.patch(`${BASE_URL}/transactions/${id}/status`, {
    status,
  });
  return result;
};

export const deleteTransactionById = async (id) => {
  await axios.delete(`${BASE_URL}/transactions/${id}`);
};
