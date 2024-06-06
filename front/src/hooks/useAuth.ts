import { useEffect, useState } from 'react'
import axios from 'axios'
import { parseCookies } from 'nookies'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isChecking, setIsChecking] = useState<boolean>(true)

  useEffect(() => {
    const checkAuth = async () => {
      const cookies = parseCookies()
      const accessToken = cookies.jwt

      console.log(accessToken)

      if (accessToken) {
        try {
          await axios.get('http://localhost:3003/auth/validate', {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          setIsAuthenticated(true)
        } catch (error) {
          setIsAuthenticated(false)
        } finally {
          setIsChecking(false)
        }
      } else {
        setIsAuthenticated(false)
        setIsChecking(false)
      }
    }

    checkAuth()
  }, [])

  return { isAuthenticated, isChecking }
}
