//rafce
import React from 'react'

const DemoDatabinding = () => {

    let name = "Khải Trương";
    let img = 'https://i.pravatar.cc';
    let prod = {
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://picsum.photos/id/10/200/200'
    }

    const renderCard = () => {
        //xử lý ....
        // return 'hello cybersoft' // string, number, boolean, jsx <div></div>

        return (<div className='card w-25'>
            <img src={prod.img} alt='product' />
            <div className='card-body'>
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <a href={`/detail/${prod.id}`} className='btn btn-dark'>View detail</a>
            </div>
        </div>)
    }

    return (
        <div className='container'>
            <h3>Databinding</h3>
            <div id="content">
                Họ tên: {name}
            </div>
            <div className='card w-25'>
                <img src={img} alt='avatar' />
            </div>
            <br /> <br />
            {renderCard()}
        </div>
    )
}

export default DemoDatabinding