import React, { useState } from 'react'
import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

export type TextFieldProps = {
  initialValue?: string
  disabled?: boolean
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  initialValue,
  disabled,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState<string>(initialValue ?? '')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      disabled={disabled}
      className={styles['textfield']}
      {...props}
    />
  )
}

export default TextField
