import React from 'react'
import { Navigation,Footer } from '.'

type LayoutProps = {children:any}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="vh-100">
    <Navigation />
    <div className="container overflow-auto" style={{height:'80%'}}>
      {children}
    </div>
    <Footer/>
      
  </div>
  )
}

export default Layout