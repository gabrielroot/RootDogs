import React from 'react'
import styles from './HasError.module.css'

const HasError = ({ error }) => {
  if (!error) return null
  return (
    <div className={styles.hasError}>
      <p>{error}</p>
    </div>
  )
}

export default HasError
