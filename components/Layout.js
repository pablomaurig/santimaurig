import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, title, description, favicon }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href={favicon} />
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
        <Header />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout