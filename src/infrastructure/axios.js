import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const myPromise = (fn) => {
  return new Promise((resolve, reject) => {
    return fn.then(response => {
      return resolve(response)
    })
      .catch(error => {
        return reject(error.response)
      })
  })
}

export {axiosInstance}