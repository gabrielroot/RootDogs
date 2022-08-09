import React, { useState, createContext } from 'react'
import { TOKEN_POST, USER_GET } from '../Utils/fetch'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getUser(token) {
    const data = await USER_GET(token)
    if (data && data?.id) {
      setData(data)
      setLogin(true)
    }
  }

  async function userLogin(username, password) {
    const data = await TOKEN_POST({ username, password })

    if (data && data?.token) {
      window.localStorage.setItem('token', data.token)
      getUser(data.token)
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}
