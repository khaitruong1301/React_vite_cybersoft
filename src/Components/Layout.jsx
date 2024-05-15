//rafce: react arrow function component

import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

const Layout = () => {
    //phím tắt gợi ý: 
    // mac:option + esc 
    //window: control + space
  return (
    <div>
        <Header />
        <div className='d-flex'>
            <div className='w-25'>
                <Navigation />
            </div>
            <div className='w-75'>
                <Content />
            </div>
        </div>
        <Footer />

    </div>
  )
}

export default Layout