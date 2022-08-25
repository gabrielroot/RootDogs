import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { Navigate } from 'react-router-dom'

const index = ({ children}) => {
  const { login } = useContext(UserContext) 
  return login ? children : <Navigate to='/login' />
}

export default index