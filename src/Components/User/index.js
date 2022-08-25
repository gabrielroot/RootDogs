import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserHeader } from '../../Components'
import { Feed, UserPhotoPost, UserStats } from '../../Pages'

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
