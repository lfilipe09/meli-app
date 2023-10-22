import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './styles.module.scss'

export type ButtonProps = {
  color?: 'blue' | 'grey'
  size?: 'full' | 'fit'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, color = 'grey', size = 'fit', ...props },
  ref
) => (
  <button
    className={`${styles.button} ${
      color === 'blue' ? styles['button--secondary'] : ''
    } ${size === 'full' ? styles['button--full'] : ''}`}
    ref={ref}
    {...props}
  >
    {!!children && <span>{children}</span>}
  </button>
)

export default forwardRef(Button)
