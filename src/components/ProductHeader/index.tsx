import React from 'react'
import styles from './styles.module.scss'
import ResponsiveImage from '../ResponsiveImage'
import Button from '../Button'

export type ProductHeaderProps = {
  img: {
    url: string
    alt: string
  }
  price: string
  title: string
  condition: string
  soldQty: number
}

const ProductHeader = ({
  condition,
  img,
  price,
  soldQty,
  title
}: ProductHeaderProps) => (
  <div className={styles['product-header']}>
    <div className={styles['product-cover-img']}>
      <ResponsiveImage
        alt={img.alt}
        src={img.url}
        height={680}
        isLazyLoad={true}
      />
    </div>
    <div className={styles['product-header__content']}>
      <div>
        <div className={styles['product-header__condition']}>
          <span>{condition === 'new' ? 'Novo' : 'Usado'}&nbsp;-&nbsp;</span>
          <span>{soldQty} vendidos</span>
        </div>
        <h1>{title}</h1>
      </div>
      <div className={styles['product-header__price']}>
        <span className={styles['product-header__price-amount']}>
          {price.slice(0, -3)}
        </span>
        <span className={styles['product-header__price-decimals']}>
          {price.slice(-2)}
        </span>
      </div>
      <Button color="blue" size="full">
        Comprar
      </Button>
    </div>
  </div>
)

export default ProductHeader
