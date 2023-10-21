import React from 'react'
import styles from './styles.module.scss'
import ResponsiveImage from '../ResponsiveImage'

import freeShipping from '../../../public/img/ic_shipping.png'
import freeShipping2x from '../../../public/img/ic_shipping@2x.png'

export type ProductCardProps = {
  img: {
    url: string
    alt: string
  }
  price: string
  isFreeShipping: boolean
  title: string
  city: string
  condition?: string
  id: string
}

const ProductCard = ({
  city,
  condition,
  img,
  isFreeShipping,
  price,
  title,
  id
}: ProductCardProps) => (
  <a href={`/items/${id}`} className={styles['product-card']}>
    <div>
      <ResponsiveImage
        alt={img.alt}
        src={img.url}
        width={180}
        height={180}
        isLazyLoad={true}
      />
      <div className={styles['product-card__info']}>
        <div className={styles['product-card__info-price']}>
          <span>{price}</span>
          {isFreeShipping && (
            <ResponsiveImage
              alt={'Frete Grátis'}
              srcSet={`${freeShipping} 1x, ${freeShipping2x} 2x`}
              src={freeShipping}
              height={18}
              width={18}
              isLazyLoad={true}
            />
          )}
        </div>
        <div>{title}</div>
        {condition && <div>{condition === 'new' ? 'Novo' : 'Usado'}</div>}
      </div>
    </div>
    <span>{city}</span>
  </a>
)

export default ProductCard
