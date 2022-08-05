import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../../../Components'
import { useForm } from '../../../Hooks'
import { TOKEN_POST, USER_GET } from '../../../Utils/fetch'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  useEffect(() => {
    async function fetchData() {
      const token = window.localStorage.getItem('token')
      if (token) console.log(await getUser(token))
    }

    fetchData()
  }, [])

  async function getUser() {
    return await USER_GET(window.localStorage.getItem('token'))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!(username.validate() && password.validate())) return

    const data = await TOKEN_POST({
      username: username.value,
      password: password.value
    })

    if (data && data.token) {
      window.localStorage.setItem('token', data.token)
      console.log(await getUser(data.token))
    } else console.log(data)
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name="username" label="Username" {...username} />
        <Input name="password" label="Password" type="password" {...password} />
        <Button>Login</Button>
      </form>
      <Link to="/login/register">Register</Link>
    </section>
  )
}

export default LoginForm
