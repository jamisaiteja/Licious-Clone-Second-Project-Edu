import React,{useState} from 'react';
import {Link} from "react-router-dom";
import AddToCart from "../cart/addToCart";
// import {useCart} from "../../Context/cartContext";
import toast from "react-hot-toast"


const ListingDisplay = (props)=>{
    // const [cart,setCart]=useCart();

    const {items,url} = props;
    let weight = items.net;

    return(
        <div className="col-md-4">
            <div className="card">
                <div className="img-wrapper">
                    <img className="imgFluid" alt={items.name} src={items.imgUrl}/>
                </div>
                <div className="cardBody">
                    <Link to={`${url}${items.id}`}>
                        <h5 className="cardTitle">{items.name}</h5>
                        <p className="cardText">{items.des}</p>
                    </Link>
                    {weight ? <p className="weight">{items.net} {items.unit}</p> : <p className="weight">{items.no_of_pieces} Pieces</p>}
                    <div className="d-flex justify-content-between">
                        <p className="MRP">{items.price_tag} {items.currency} {items.price}</p>
                        <AddToCart item={items}/>
                        {/* <button className="addToCartBtn">Add to Cart</button> */}
                        {/* <button className="addToCartBtn" onClick={()=>{
                            setCart([...cart,items]);
                        toast.success("Item Added to cart")}}>Add to Cart</button> */}
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
}

export default ListingDisplay;