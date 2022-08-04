import React, { Component, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './Components'
import { Login, Home } from './Pages'

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
