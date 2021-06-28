import { axiosInstance } from '../axios'

export default {
  fetchAll: async () => {
    console.log('check 6')
    return await axiosInstance.get('users')
  }
}