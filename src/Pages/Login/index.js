import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import {
  LoginForm,
  LoginRegister,
  LoginPasswordLost,
  LoginPasswordReset
} from '../'
import { UserContext } from '../../Contexts/UserContext'

const index = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/account" />

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="register" element={<LoginRegister />} />
        <Route path="lost" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default index
