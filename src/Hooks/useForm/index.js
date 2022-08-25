import { useState } from 'react'

const types = {
  email: {
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message: 'Bad pattern: Insert a valid email.'
  },
  password: {
    regex: ENV === 'development' ? /()/ : /^(?=.*([a-z]|ç))(?=.*([A-Z]|Ç)).{6,}$/,
    message: 'The password must be at least 1 lower and 1 upper case, with a minimum length of 6 characters.'
  }
}

const useForm = type => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Enter a value.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
