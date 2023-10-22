import React from 'react'
import Header from '../../components/Header'
import styles from './styles.module.scss'

type BaseTemplateProps = {
  children?: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <main className={styles.base}>
    <header className={styles['header__wrapper']}>
      <div className={'container'}>
        <Header />
      </div>
    </header>
    <div className={'container'}>{children}</div>
  </main>
)

export default Base
