import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './styles.module.scss'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, ...props },
  ref
) => (
  <button className={styles.button} ref={ref} {...props}>
    {!!children && <span>{children}</span>}
  </button>
)

export default forwardRef(Button)
