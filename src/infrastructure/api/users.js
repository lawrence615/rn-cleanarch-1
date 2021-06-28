import { axiosInstance } from '../axios'

export default {
  fetchAll: async () => {
    return await axiosInstance.get('users')
  }
}