import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8aab515b-a7ff-412f-94c0-660df0312e47",
  }
});

export const getUsers = (currentPage = 1, pageSize = 5) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    })
}

export const followPost = (id) => {
  return instance.post(`follow/${id}`)
}

export const followDelete = (id) => {
  return instance.delete(`follow/${id}`)
}

export const authMe = () => {
  return instance.get(`auth/me`)
}

export const getProfile = (id) => {
  return instance.get(`profile/${id}`)
}

export const getStatus = (id) => {
  return instance.get(`profile/status/${id}`)
}

export const updateStatus = (status) => {
  return instance.put(`/profile/status`, {
    status,
  })
}

export const logining = (email, password, rememberMe = false) => {
  return instance.post('/auth/login', {
    email,
    password,
    rememberMe,
  })
}

export const logout = () => {
  return instance.delete('auth/login')
}

// Рабочий запрос
// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
//   withCredentials: true,
//   headers: { "API-KEY": "8aab515b-a7ff-412f-94c0-660df0312e47" }
// })
//   .then(response => {
//     if (response.data.resultCode == 0) props.follow(item.id);
//   })