import axios from 'axios'
import { NextRequest } from 'next/server'

export async function checkIsAuthenticated(req: NextRequest) {
  const jwtCookie = req.cookies.get('jwt')
  const accessToken = jwtCookie?.value

  if (accessToken) {
    try {
      await axios.get('http://localhost:3003/auth/validate', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      return true
    } catch (error) {
      return false
    }
  } else {
    return false
  }
}
