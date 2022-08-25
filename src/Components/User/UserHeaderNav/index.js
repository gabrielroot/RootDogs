import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import { ReactComponent as MyPhotos } from '../../../Assets/feed.svg'
import { ReactComponent as Stats } from '../../../Assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../../Assets/adicionar.svg'
import { ReactComponent as Exit } from '../../../Assets/sair.svg'

import styles from './UserHeaderNav.module.css'

const index = () => {
  const [mobile, setMobile] = useState(null)

  const { userLogout } = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to='/account' end>
        <MyPhotos />
        {mobile && 'My Photos'}
      </NavLink>
      <NavLink to='/account/stats'>
        <Stats />
        {mobile && 'Stats'}
      </NavLink>
      <NavLink to='/account/post'>
        <AddPhoto />
        {mobile && 'Add Photo'}
      </NavLink>
      <button onClick={userLogout}>
        <Exit />
        {mobile && 'Exit'}
      </button>
    </nav>
  )
}

export default index
