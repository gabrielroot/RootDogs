import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [user, setUser] = useState({ username: '', password: '' })

  const handleSubmit = e => {
    e.preventDefault()

    fetch(`${process.env.REACT_APP_API_BASE_URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user })
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        console.log(json)
      })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        <button>Login</button>
      </form>
      <Link to="/login/register">Register</Link>
    </section>
  )
}

export default LoginForm
