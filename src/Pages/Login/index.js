import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import {
  LoginForm,
  LoginRegister,
  LoginPasswordLost,
  LoginPasswordReset
} from '../'
import { UserContext } from '../../Contexts/UserContext'
import styles from './Login.module.css'

const index = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/account" />

  return (
    <section className={`${styles.login} zoomIn`}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<LoginRegister />} />
          <Route path="forgot" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default index
