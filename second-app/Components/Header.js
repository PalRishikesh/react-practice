import Link from 'next/link'
import React from 'react'
const Header = (props) => { 
  return (
    <>
    <div className='bg-green-500 flex items-center justify-between'>
      <h2>Logo</h2>
      <div className='flex gap-5'>
      <Link href="About">About</Link>
      <Link href="Product">Product</Link>
      <Link href="Courses">Courses</Link>
      </div>
    </div>
    </>
    
  )
}

export default Header
