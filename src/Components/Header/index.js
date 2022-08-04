import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dog } from '../../Assets/dogs.svg'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={`${styles.logo}`}>
          <Dog />
        </Link>
        <Link to="/login" className={`${styles.login}`}>
          Login / Register
        </Link>
      </nav>
    </header>
  )
}

export default Header
