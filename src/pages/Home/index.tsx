import React from 'react'
import Base from '../Base'

import meliLogo from '../../assets/img/Logo_ML@2x.png'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mercado Livre Brasil - Frete Grátis no mesmo dia</title>
        <meta
          name="description"
          content={
            'Explore nossa ampla gama de produtos da coleção. Encontre os itens perfeitos para suas necessidades.'
          }
        />
        <meta
          property="og:title"
          content={'Mercado Livre Brasil - Frete Grátis no mesmo dia'}
        />
        <meta
          property="og:description"
          content={
            'Explore nossa ampla gama de produtos da coleção. Encontre os itens perfeitos para suas necessidades.'
          }
        />
        <meta property="og:image" content={meliLogo} />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Base />
    </>
  )
}

export default Home
