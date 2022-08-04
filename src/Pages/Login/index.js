import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  LoginForm,
  LoginRegister,
  LoginPasswordLost,
  LoginPasswordReset
} from '../'

const index = () => {
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
