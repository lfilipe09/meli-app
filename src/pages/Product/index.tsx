import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Base from '../Base'
import { useEffect, useState } from 'react'
import { ProductAPIProps } from '../../types/product'
import { api } from '../../services/api'
import Breadcrumb from '../../components/Breadcrumb'

import styles from './styles.module.scss'
import ProductHeader from '../../components/ProductHeader'
import { formatPrice } from '../../utils/priceFormatter'

const Product = () => {
  const { id } = useParams()
  const [items, setItems] = useState<ProductAPIProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ProductAPIProps>(`/api/items/${id}`)
        setItems(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Base>
      {loading ? (
        <div className={styles['product__loader']}>
          <svg
            width={80}
            height={80}
            viewBox="-3 -3 42 42"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#333333"
          >
            <title>Loading...</title>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)" strokeWidth="3">
                <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <>
          {items && (
            <Helmet>
              <title>{items.items.title}</title>
              <meta name="description" content={items.items.description} />
              <meta property="og:title" content={items.items.title} />
              <meta
                property="og:description"
                content={items.items.description}
              />
              <meta property="og:image" content={items.items.picture_url} />
              <meta property="og:url" content={window.location.href} />
              <link rel="canonical" href={window.location.href} />
            </Helmet>
          )}
          <div className={styles['product__breadcrumbs']}>
            <Breadcrumb items={items?.categories ?? []} />
          </div>
          <div className={styles['product__product-card']}>
            {items && (
              <ProductHeader
                condition={items.items.condition}
                img={{
                  alt: items.items.title,
                  url: items.items.picture_url
                }}
                price={formatPrice({
                  currency: items.items.price.currency,
                  amount: items.items.price.amount,
                  decimals: items.items.price.decimals
                })}
                soldQty={items.items.sold_qty}
                title={items.items.title}
              />
            )}
            {items?.items.description && (
              <div>
                <h2>Descrição</h2>
                <p>{items?.items.description}</p>
              </div>
            )}
          </div>
        </>
      )}
    </Base>
  )
}

export default Product
