import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <div className='bg-danger text-dark'>
        <div className='display-4 p-5'>
            Content
            <div className='row'>
                <div className='col-4'>
                    <Card />
                </div>
                <div className='col-4'>
                    <Card />
                </div>
                <div className='col-4'>
                    <Card />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Content