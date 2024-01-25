import { AxiosResponse } from 'axios';
import { api } from './api';

const API_BASE_URL = '/users'; // Ajuste conforme necessário

export const registerUser = async (
  userData: any
): Promise<AxiosResponse<any>> => {
  try {
    return await api.post<any>(`${API_BASE_URL}`, userData);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export const loginUser = async (userData: any): Promise<AxiosResponse<any>> => {
  try {
    return await api.post<any>(`${API_BASE_URL}/login`, userData);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const getUserById = async (
  userId: string
): Promise<AxiosResponse<any>> => {
  try {
    return await api.get<any>(`${API_BASE_URL}/${userId}`);
  } catch (error) {
    console.error('Erro ao obter usuário por ID:', error);
    throw error;
  }
};
