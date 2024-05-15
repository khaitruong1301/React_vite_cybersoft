import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <div className='card-header'>
            Title
        </div>
        <img src='https://i.pravatar.cc' alt='...' />
        <div className='card-body'>
            <h3>Card name</h3>
            <p>1000$</p>
        </div>
    </div>
  )
}

export default Card