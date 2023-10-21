import React, { useState } from 'react'
import { redirect } from 'react-router-dom'
import styles from './styles.module.scss'

import TextField from '../TextField'
import Button from '../Button'
import ResponsiveImage from '../ResponsiveImage'

import magnifyingGlass from '../../../public/img/ic_Search.png'
import magnifyingGlass2x from '../../../public/img/ic_Search@2x.png'

const FormSearch = () => {
  const [value, setValue] = useState<string>('')

  const handleInput = (inputValue: string) => {
    setValue(inputValue)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return redirect(`/items?search=${value}`)
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
