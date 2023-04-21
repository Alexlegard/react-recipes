import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './Layout.css'

function Layout() {
  return (
    <div className="container">
        <Header name="Alex" />
        <Main />
        <Footer />
    </div>
  )
}

export default Layout