import React, { Fragment, useContext } from 'react'
import { Input, Button, HasError } from '../../../Components'
import { UserContext } from '../../../Contexts/UserContext'
import { useForm, useFetch } from '../../../Hooks'

const LoginRegister = () => {
  const { userLogin } = useContext(UserContext)
  const { error, loading, ...api } = useFetch()

  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const handleSubmit = async e => {
    e.preventDefault()

    const body = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    if (!(password.validate() && username.validate() && email.validate())) return

    const { response } = await api.post('/api/user', body)

    if (response.ok) userLogin(username.value, password.value)
  }  

  return (
    <Fragment>
      <div className="zoomIn">
        <h1 className='title'>Register</h1>
        <form onSubmit={handleSubmit}>
          <Input label="User" type="text" name="username" {...username} />
          <Input label="Email" type="email" name="email" {...email} />
          <Input label="Password" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Registering...</Button>
          ) : (
            <Button>Register</Button>
          )}
          <HasError error={error} />
        </form>
      </div>
    </Fragment>
  )
}

export default LoginRegister
