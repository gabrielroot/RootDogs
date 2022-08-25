import React, { useState, createContext, useEffect } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../Utils/fetch'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      try {
        const token = window.localStorage.getItem('token')

        if (token) {
          const response = await TOKEN_VALIDATE_POST(token)
          if (!response.ok) throw new Error('Invalid token.')
          await getUser(token)
          navigate('/account')
        }
      } catch (error) {
        userLogout()
      } finally {
        setLoading(false)
      }
    }
    autoLogin()
  }, [])

  function userLogout() {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }

  async function getUser(token) {
    const data = await USER_GET(token)
    if (data && data?.id) {
      setData(data)
      setLogin(true)
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const response = await TOKEN_POST({ username, password })

      if (response.ok) {
        const data = await response.json()
        window.localStorage.setItem('token', data.token)
        await getUser(data.token)
      } else {
        throw new Error(
          `Error: ${
            response?.status === 403 ? 'Bad credentials.' : 'An error occurred!'
          }`
        )
      }
    } catch (error) {
      setError(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}
