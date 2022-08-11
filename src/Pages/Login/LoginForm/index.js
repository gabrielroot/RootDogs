import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, HasError, Input } from '../../../Components'
import { useForm } from '../../../Hooks'
import { UserContext } from '../../../Contexts/UserContext'
import styles from './LoginForm.module.css'
import btnStyles from '../../../Components/Form/Button/Button.module.css'

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
    <section className="zoomIn">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" label="Username" required {...username} />
        <Input
          name="password"
          label="Password"
          type="password"
          required
          {...password}
        />
        <div className={styles.formActions}>
          <div>
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Login</Button>
            )}
            <HasError error={error} />
          </div>
          <Link className={styles.forgot} to="/login/forgot">
            Forgot password?
          </Link>
        </div>
      </form>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>Don't have an account? Register now!</p>
        <Link className={btnStyles.button} to="/login/register">
          Register
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
