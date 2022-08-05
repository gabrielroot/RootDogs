export const API_URL = process.env.REACT_APP_API_BASE_URL

export async function TOKEN_POST(body) {
  const response = await fetch(`${API_URL}/jwt-auth/v1/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return await response.json()
}

export async function USER_GET(token) {
  const response = await fetch(`${API_URL}/api/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return await response.json()
}
