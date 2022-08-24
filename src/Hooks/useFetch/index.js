import { useState, useCallback } from 'react'
import { getToken } from '../../Utils/storage'

const API_URL = process.env.REACT_APP_API_BASE_URL

const useFetch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (response.ok === false) throw new Error(json.message)
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setData(json)
      setLoading(false)
      return {response, json}
    }
  }, [])

  const post = useCallback(async (url, body = {}) => {
    const auth = getToken() ? { Authorization: `Bearer ${getToken()}` } : {}
    
    return await request(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...auth
      },
      body: JSON.stringify(body)
    })
  }, [])

  return {
    loading,
    error,
    data,
    post
  }
}

export default useFetch