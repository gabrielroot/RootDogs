import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Feed, UserPhotoPost, UserStats, UserHeader } from '../../Components'

const index = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/post' element={<UserPhotoPost />} />
        <Route path='/stats' element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default index
