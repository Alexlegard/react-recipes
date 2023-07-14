import React, { memo } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './Layout.css'

function Layout({ children, handleSearchBarSubmit }, props) {

  return <>
    <div className="container">
      <Header

        handleSearchBarSubmit={handleSearchBarSubmit} />
      {children}
      <Footer />
    </div>
  </>
}

// memoizing the layout means it won't re-render when the parent re-renders, unless Layout's props change
export default memo(Layout)