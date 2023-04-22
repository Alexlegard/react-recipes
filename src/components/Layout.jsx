import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './Layout.css'

function Layout({children, name}) {
  return <>
    <div className="container">
        <Header />
        {children}
        <Footer />
    </div>
  </>
}

export default Layout