import React from 'react';
import {useCart} from "../../Context/cartContext";
// import toast from "react-hot-toast";
import "./cartPage.css"
import Header from "../Header";

const Cart = (props) => {
    const [cart,setCart] = useCart();

    const totalPrice = () => {
        try {
            let total = 0;
            cart?.map((item) => {
                total = total + item.price*item.quantity;
                sessionStorage.setItem("TotalPrice",total);
                return "ok";
            });
            return total.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            sessionStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    };

    const setDecrease=(card_id)=>{
        setCart(cart =>
            cart.map( (item) =>
                card_id === item._id ? {...item, quantity: item.quantity - (item.quantity>1?1:0)} : item
        ));
    }

    const setIncrease=(card_id)=>{
        setCart(cart =>
            cart.map( (item) =>
            card_id === item._id ? {...item, quantity: item.quantity + 1} : item
        ));
    }

    const Proceed = ()=>{
        props.history.push(`/placeOrder`)
    }
    return (
        <>
            <Header/>
            <main>
                <div className='cart-page'>
                    <div className='row'>
                        <div className="col-md-12">
                            <h1 className="text-center bg-light p-2 mb-1">
                                Hello User,
                            </h1>
                            <p className="text-center">{cart?.length? `You Have ${cart.length} items in your cart`: " Your Cart is Empty"}</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 p-2 m-2">
                                {cart?.map((p) => (
                                    <div className="row card flex-row justify-content-center" key={p._id}>
                                        <div className="col-md-2">
                                            <img
                                            src={p.imgUrl}
                                            className="cardImgTop"
                                            alt={p.name}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <p className='name'>{p.name}</p>
                                            <p  className='description'>{p.description.substring(0, 150)} ....</p>
                                            <p className='price'>{p.price_tag} {p.currency} {p.price*p.quantity}</p>
                                        </div>
                                        <div className="col-md-2 add-minus-quantity">
                                            <i className="fas fa-minus minus" onClick={()=>setDecrease(p._id)}></i>
                                            <div>{p.quantity}</div>
                                            <i className="fas fa-plus add" onClick={()=>setIncrease(p._id)}></i>
                                        </div>
                                        <div className="col-md-2 cart-remove-btn">
                                            <button
                                            className="btn btn-danger"
                                            onClick = {()=>removeCartItem(p._id)}
                                            >
                                            Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-12 cartSummary d-flex justify-content-around'>
                                <h2 className='name'  style={{fontSize:"30px"}}>Total Cart Price</h2>
                                <h4 className='price' style={{fontSize:"30px"}}>Total : {totalPrice()} </h4>
                            </div>
                            <hr />
                            <div className='col-md-12 d-flex justify-content-around'>
                                <button
                                    className="btn btn-danger"
                                    onClick = {()=>cart.length>0?Proceed():alert("Please Add Items in Cart to Proceed")}
                                >
                                    Proceed to PlaceOrder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart