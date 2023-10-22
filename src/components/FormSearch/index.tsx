import React, { useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

import TextField from '../TextField'
import Button from '../Button'
import ResponsiveImage from '../ResponsiveImage'

import magnifyingGlass from '../../assets/img/ic_Search.png'
import magnifyingGlass2x from '../../assets/img/ic_Search@2x.png'

const FormSearch = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState<string>('')
  const searchPath = useMatch('/items')

  const handleInput = (inputValue: string) => {
    setValue(inputValue)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (value !== '') {
      navigate(`/items?search=${value}`)
      if (searchPath) {
        window.location.reload()
      }
    }
  }
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      data-testid="form-search"
    >
      <TextField
        onInputChange={(v) => handleInput(v)}
        placeholder="Nunca deixe de buscar"
      />
      <Button type="submit">
        <ResponsiveImage
          srcSet={`${magnifyingGlass} 1x, ${magnifyingGlass2x} 2x`}
          src={magnifyingGlass}
          alt="Um ícone de lupa"
          width={18}
          height={18}
        />
      </Button>
    </form>
  )
}

export default FormSearch
