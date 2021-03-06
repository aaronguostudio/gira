import { User } from './interfaces/common'

const localStorageKey = '__auth_provider__token__'
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

export const login = (param: { username: string, password: string }) => {
  return fetch(
    `${apiUrl}/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(param)
    }
  ).then(async res => {
    if (res.ok) {
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject()
    }
  })
}

export const register = (param: { username: string, password: string }) => {
  return fetch(
    `${apiUrl}/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(param)
    }
  ).then(async res => {
    if (res.ok) {
      return handleUserResponse(await res.json())
    } else {
      return Promise.reject()
    }
  })
}

export const logout = async () => window.localStorage.removeItem(localStorageKey)
