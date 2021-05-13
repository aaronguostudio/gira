import qs from 'qs'
import * as auth from 'auth-provider'
import { useAuth } from 'context/auth-context'

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  token?: string
  data?: object
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }

  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async res => {
    if (res.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject({ message: 'token timeout' })
    }

    const reData = res.json()
    if (res.ok) {
      return reData
    } else {
      return Promise.reject(reData)
    }
  })
}

export const useHttp = () => {
  const { user } = useAuth()
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token})
}
