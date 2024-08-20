import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
const useAxiosCommon = () => {
  console.log(import.meta.env.VITE_API_URL,'Api url')
  return axiosCommon
}

export default useAxiosCommon
