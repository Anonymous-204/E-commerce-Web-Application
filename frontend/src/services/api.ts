import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
let accessToken: string | null = null;
export const setAccessToken = (token: string) => {
  accessToken = token;
}
export const getAccessToken = () =>{
  return accessToken
}
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
    async error => {

        const originalRequest = error.config;
        if (error.response?.status === 401 && 
            !originalRequest._retry && 
            originalRequest.url !== '/auth/refresh') {

                originalRequest._retry = true;
                const refreshResponse = await api.post('/auth/refresh')
                const newAccessToken = refreshResponse.data.accessToken;
                setAccessToken(newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            }
        throw error;
    }
    

);

export default api;