import React from 'react'
import HasError from '../../FormFeedback/HasError'
import styles from './Input.module.css'

const Input = ({
  id,
  name,
  label,
  type,
  value,
  onBlur,
  onChange,
  error,
  required
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {required && <span style={{ color: 'red' }}>* </span>}
        {label}:
      </label>
      <input
        id={id}
        name={name}
        className={styles.input}
        autoComplete="off"
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      <HasError error={error} />
    </div>
  )
}

export default Input
