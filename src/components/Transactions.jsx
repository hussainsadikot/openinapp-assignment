import React from 'react'
import { Link } from 'react-router-dom'

const Transactions = () => {
  return (
    <div>
     
      <p> Transacions</p>
      <Link to="/" className="underline" >Go to Dashboard</Link>
    </div>
  )
}

export default Transactions
