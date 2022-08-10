import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../../../Components'
import { useForm } from '../../../Hooks'
import { UserContext } from '../../../Contexts/UserContext'

const LoginForm = () => {
  const { userLogin, error, loading } = useContext(UserContext)

  const username = useForm()
  const password = useForm()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!(username.validate() && password.validate())) return

    userLogin(username.value, password.value)
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name="username" label="Username" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Login</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/register">Register</Link>
    </section>
  )
}

export default LoginForm
