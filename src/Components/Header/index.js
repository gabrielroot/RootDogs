import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dog } from '../../Assets/dogs.svg'
import { UserContext } from '../../Contexts/UserContext'

const Header = () => {
  const { data, userLogout } = useContext(UserContext)

  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={`${styles.logo}`}>
          <Dog />
        </Link>
        {data ? (
          <Link to="/account" className={`${styles.login}`}>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={`${styles.login}`}>
            Login / Register
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
