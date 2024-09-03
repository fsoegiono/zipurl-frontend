import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PUBLIC_API_URL || 'http://localhost:8080/api/v1',
});

export const shortenUrl = async (url: string): Promise<string> => {
  const response = await api.post<{ shortUrl: string }>('/shorten', { longUrl: url });
  return response.data.shortUrl;
};