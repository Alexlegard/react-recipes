import React, { useState } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './Layout.css'

function Layout({ children, searchValue, setSearchValue, handleSearchBarChange }, props) {

  return <>
    <div className="container">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchBarChange={handleSearchBarChange} />
      {children}
      <Footer />
    </div>
  </>
}

export default Layout