import React from 'react'
import { Link } from 'react-router'
function Layout({children}) {
  return (
    <div>
      <Link to="/">Movie nighet Picker</Link>
      <main>{children}</main>
    </div>
  )
}

export default Layout
