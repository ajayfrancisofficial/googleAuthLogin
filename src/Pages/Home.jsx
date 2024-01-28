import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='text-center '>
        
        <h1 className='text-success m-5'>Login Successful</h1>
        <Link  to={'/'}>Go back</Link>
    </div>
  )
}

export default Home