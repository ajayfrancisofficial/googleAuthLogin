import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        
        <h1>Login Successful</h1>
        <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default Home