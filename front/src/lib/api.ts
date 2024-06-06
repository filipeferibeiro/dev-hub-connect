import axios from 'axios'
import { getSession } from 'next-auth/react'

export const api = axios.create({
  baseURL: process.env.BACKEND_BASE_URL || 'http://localhost:3003',
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.request.use(async (request) => {
  const session = await getSession()
  if (session) {
    request.headers.Authorization = `Bearer ${session.backendTokens.accessToken}`
  }
  return request
})
