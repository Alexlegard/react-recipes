import React, { memo, useState } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './Layout.css'
import { useGlobalStateStore } from 'utils/store'

function Layout({ children, handleSearchBarChange }, props) {

  return <>
    <div className="container">
      <Header

        handleSearchBarChange={handleSearchBarChange} />
      {children}
      <Footer />
    </div>
  </>
}

// memoizing the layout means it won't re-render when the parent re-renders, unless Layout's props change
export default memo(Layout)