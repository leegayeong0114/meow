import axios, { AxiosRequestConfig } from 'axios'

export const api = () => {

  const axiosInstance = axios.create()

  let accessToken = localStorage.getItem('accessToken')

  axiosInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        config.headers = {
          ...config.headers,
          Authorization: `${accessToken}`,
        }
      return config
    }
  )

  return axiosInstance
}
