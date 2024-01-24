// src/services/groupService.ts
import { AxiosResponse } from 'axios';
import { api } from './api';

const API_BASE_URL = '/groups'; // Ajuste conforme necessário

export const createGroup = async (
  groupData: any
): Promise<AxiosResponse<any>> => {
  try {
    return await api.post<any>(`${API_BASE_URL}`, groupData);
  } catch (error) {
    console.error('Erro ao criar grupo:', error);
    throw error;
  }
};

export const getGroupsThisWeek = async (): Promise<AxiosResponse<any>> => {
  try {
    return await api.get<any>(`${API_BASE_URL}/this-week`);
  } catch (error) {
    console.error('Erro ao obter grupos desta semana:', error);
    throw error;
  }
};

export const getGroupsByOwnerId = async (
  ownerId: string
): Promise<AxiosResponse<any>> => {
  try {
    return await api.get<any>(`${API_BASE_URL}/owner/${ownerId}`);
  } catch (error) {
    console.error('Erro ao obter grupos pelo ownerId:', error);
    throw error;
  }
};

export const getGroupById = async (
  groupId: string
): Promise<AxiosResponse<any>> => {
  try {
    return await api.get<any>(`${API_BASE_URL}/${groupId}`);
  } catch (error) {
    console.error('Erro ao obter grupo por ID:', error);
    throw error;
  }
};

export const getAllGroups = async (): Promise<AxiosResponse<any>> => {
  try {
    return await api.get<any>(`${API_BASE_URL}`);
  } catch (error) {
    console.error('Erro ao obter todos os grupos:', error);
    throw error;
  }
};

export const getGroupsToday = async (): Promise<AxiosResponse<any>> => {
  try {
    return await api.get<any>(`${API_BASE_URL}/today`);
  } catch (error) {
    console.error('Erro ao obter grupos de hoje:', error);
    throw error;
  }
};
