import React, { useEffect, useState } from 'react'
import Base from '../Base'
import { useSearchParams } from 'react-router-dom'
import { api } from '../../services/api'
import { ItemsAPIProps } from '../../types/product'
import ProductCard from '../../components/ProductCard'
import { formatPrice } from '../../utils/priceFormatter'
import Breadcrumb from '../../components/Breadcrumb'

import styles from './styles.module.scss'

const Search = () => {
  const [searchParams] = useSearchParams()
  const [items, setItems] = useState<ItemsAPIProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ItemsAPIProps>(
          searchParams.get('search')
            ? `/api/items?search=${searchParams.get('search')}`
            : `/api/items?category=${searchParams.get('category')}`
        )
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
        <div className={styles['search__loader']}>
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
          <div className={styles['search__breadcrumbs']}>
            <Breadcrumb items={items?.categories ?? []} />
          </div>
          <section className={styles['search__list']}>
            {items?.items.map((item) => (
              <div className={styles['search__item']} key={item.id}>
                <ProductCard
                  city={item.city}
                  condition={item.condition}
                  id={item.id}
                  img={{
                    alt: item.title,
                    url: item.picture_url
                  }}
                  isFreeShipping={item.free_shipping}
                  price={formatPrice({
                    currency: item.price.currency,
                    amount: item.price.amount,
                    decimals: item.price.decimals
                  })}
                  title={item.title}
                />
              </div>
            ))}
          </section>
        </>
      )}
    </Base>
  )
}

export default Search
