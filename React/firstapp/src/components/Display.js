import React from 'react';
import './display.css';

const Product = (props)=>{
    const {prodData} = props;

    const renderProduct = prodData.map(item =>{
        return(
            <div className='col-md-4' key={item.id}>
                <div className="card">
                    <div className="img-wrapper">
                        <img className="img-fluid" alt="Chicken Curry Cut" src={item.imgUrl}/>
                    </div>
                    <div className="card-body">
                        <h5 classNames="card-title">{item.name}</h5>
                        <p className="card-text">{item.des}</p>
                        <p className="weight">{item.net}{item.unit}</p>
                        <div className="d-flex justify-content-between">
                            <p className="MRP">{item.price_tag} {item.currency} {item.price}</p>
                            <button className="addToCartBtn">Add to Cart</button>
                        </div>
                        <hr/>
                        <div className="text-center mt-3">
                            <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                            <span>Today in <b>90 min</b></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    return(
        <div className="container">
            <div className="row">
                {renderProduct}
            </div>
        </div>
    )
}

export default Product