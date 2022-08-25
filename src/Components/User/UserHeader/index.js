import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserHeaderNav } from '../../../Components'
import styles from './UserHeader.module.css'

const paths = {
  '/account/post': 'Post your photo',
  '/account/stats': 'Stats'
}

const index = () => {
  const[title, setTitle] = useState('Title')
  const { pathname } = useLocation()

  useEffect(() => {
    setTitle(paths[pathname] || 'My Account')
  }, [pathname])

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default index
