import React from 'react'
import styles from './Input.module.css'

const Input = ({ id, name, label, type, value, onBlur, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <input
        id={id}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
