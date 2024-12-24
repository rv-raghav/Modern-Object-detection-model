import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = {
  async processVideo(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(`${API_URL}/process-video`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  getWebcamStream() {
    return `${API_URL}/webapp`;
  },
};