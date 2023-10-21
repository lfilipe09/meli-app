import React from 'react'
import { render, screen } from '@testing-library/react'
import ResponsiveImage from '.'

describe('<ResponsiveImage />', () => {
  it('should render the image with provided src and alt text', () => {
    const altText = 'Test Alt Text'
    render(<ResponsiveImage src="test-image.jpg" alt={altText} />)

    const imgElement = screen.getByAltText(altText)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', 'test-image.jpg')
  })

  it('should render with specified class name', () => {
    const className = 'test-class'
    render(
      <ResponsiveImage
        src="test-image.jpg"
        alt="Test Alt Text"
        className={className}
      />
    )

    const imgElement = screen.getByAltText('Test Alt Text')
    expect(imgElement).toHaveClass(className)
  })

  it('should set width and height attributes if provided', () => {
    render(
      <ResponsiveImage
        src="test-image.jpg"
        alt="Test Alt Text"
        width={200}
        height={150}
      />
    )

    const imgElement = screen.getByAltText('Test Alt Text')
    expect(imgElement).toHaveAttribute('width', '200')
    expect(imgElement).toHaveAttribute('height', '150')
  })

  it('should set "loading" attribute to "lazy" when isLazyLoad is true', () => {
    render(
      <ResponsiveImage
        src="test-image.jpg"
        alt="Test Alt Text"
        isLazyLoad={true}
      />
    )

    const imgElement = screen.getByAltText('Test Alt Text')
    expect(imgElement).toHaveAttribute('loading', 'lazy')
  })

  it('should set "loading" attribute to "eager" when isLazyLoad is false', () => {
    render(
      <ResponsiveImage
        src="test-image.jpg"
        alt="Test Alt Text"
        isLazyLoad={false}
      />
    )

    const imgElement = screen.getByAltText('Test Alt Text')
    expect(imgElement).toHaveAttribute('loading', 'eager')
  })

  it('should render with specified srcSet and sizes attributes', () => {
    render(
      <ResponsiveImage
        src="test-image.jpg"
        alt="Test Alt Text"
        srcSet="test-1x.jpg 1x, test-2x.jpg 2x"
        sizes="100vw"
      />
    )

    const imgElement = screen.getByAltText('Test Alt Text')
    expect(imgElement).toHaveAttribute(
      'srcSet',
      'test-1x.jpg 1x, test-2x.jpg 2x'
    )
    expect(imgElement).toHaveAttribute('sizes', '100vw')
  })
})
