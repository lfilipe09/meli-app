import React from 'react'
import styles from './styles.module.scss'

export type BreadcrumbProps = {
  items: string[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className={styles.breadcrumbs}>
    <ol>
      {items.map((item, index) => (
        <li key={`breadcrumb-${item}-${index}`}>
          <a
            className={
              index == items.length - 1
                ? styles['breadcrumb__item--active']
                : ''
            }
            href={`/items?search=${item}`}
          >
            {item}
          </a>
          {!(index == items.length - 1) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-testid="breadcrumb-separator"
              width="6"
              height="8"
            >
              <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
            </svg>
          )}
        </li>
      ))}
    </ol>
  </nav>
)

export default Breadcrumb
