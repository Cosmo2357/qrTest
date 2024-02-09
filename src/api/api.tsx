import axios from 'axios';
export const baseUrl = process.env.EXPO_API_URL || 'http://localhost:3000/api/v1';

const Api = axios.create({
  baseURL: baseUrl, 
  timeout: 10000, // タイムアウト（ミリ秒）
});

Api.interceptors.request.use(
  async (config) => {

    //config.headers['Authorization'] = `Bearer ${accessToken}`;
    //config.headers['refreshtoken'] = refreshToken;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


Api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default Api;