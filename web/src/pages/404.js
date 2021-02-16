import React from 'react'
import Head from 'next/head'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Faixa Preta</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta type="description" content="Monitore os seus treinos e pesquise por técnicas de Karatê Shotokan com o Faixa Preta." />
        <meta name="theme-color" content="#f1f1f1" />
        
        <link rel="icon" href="./icon.png" />
      </Head>

      <div className="not-found animate-opacity">
        <h2 style={{ margin: 0 }}>404</h2>
        <p style={{ marginLeft: 20, marginTop: 0 }}>Nada foi encontrado!</p>
      </div>
    </>
  );
}

export default NotFound