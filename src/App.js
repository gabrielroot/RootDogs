import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, Header, ProtectedRouter, User } from './Components'
import { Login, Home } from './Pages'
import { UserStorage } from './Contexts/UserContext'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedRouter>
                  <Home />
                </ProtectedRouter>
              }
            />
            <Route path="/login/*" element={<Login />} />
            <Route 
              path="/account/*" 
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
            <Route
              path="*"
              element={<h1 style={{ textAlign: 'center' }}>404</h1>}
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
