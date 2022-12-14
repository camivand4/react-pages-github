import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link  to='/' >Home</Link>
      -
      <Link  to='/test' >Test</Link>
      -
      <Link  to='/second' >Second</Link>
    </div>
  )
}

export default Navbar