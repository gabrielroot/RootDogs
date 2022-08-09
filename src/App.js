import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './Components'
import { Login, Home } from './Pages'
import { UserStorage } from './Contexts/UserContext'

const App = () => {
  return (
    <Fragment>
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="*"
              element={<h1 style={{ textAlign: 'center' }}>404</h1>}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </Fragment>
  )
}

export default App
