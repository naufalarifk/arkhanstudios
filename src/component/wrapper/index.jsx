import React from 'react'
import Header from './header'

function Wrapper({children}) {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Wrapper