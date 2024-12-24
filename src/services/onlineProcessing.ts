import axios from 'axios';
import { API_CONFIG } from './config';
import type { ProcessedVideo } from '../types/detection';

export async function processVideoOnline(file: File): Promise<ProcessedVideo> {
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    const response = await axios.post(
      `${API_CONFIG.BASE_URL}/process-video`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 30000, // 30 second timeout
      }
    );
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Connection timed out. Please try again.');
      }
      if (!error.response) {
        throw new Error('Network error. Running in offline mode.');
      }
    }
    throw error;
  }
}