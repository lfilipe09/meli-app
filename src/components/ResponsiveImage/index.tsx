import React from 'react'

export type ResponsiveImageProps = {
  srcSet?: string
  src: string
  alt: string
  sizes?: string
  width?: number
  height?: number
  isLazyLoad?: boolean
  className?: string
}

const ResponsiveImage = ({
  srcSet,
  src,
  alt,
  sizes,
  width,
  height,
  isLazyLoad = false,
  className
}: ResponsiveImageProps) => {
  return (
    <img
      srcSet={srcSet}
      src={src}
      sizes={sizes}
      width={width}
      height={height}
      className={className}
      alt={alt}
      loading={isLazyLoad ? 'lazy' : 'eager'}
    />
  )
}

export default ResponsiveImage
