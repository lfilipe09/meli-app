import React from 'react'
import styles from './styles.module.scss'
import ResponsiveImage from '../ResponsiveImage'

import Logo from '../../assets/img/Logo_ML.png'
import Logo2x from '../../assets/img/Logo_ML@2x.png'
import FormSearch from '../FormSearch'

const Header = () => (
  <div className={styles.header}>
    <ResponsiveImage
      alt="Logotipo Mercado Livre"
      srcSet={`${Logo} 1x, ${Logo2x} 2x`}
      src={Logo}
      width={53}
      isLazyLoad={true}
    />
    <FormSearch />
  </div>
)

export default Header
