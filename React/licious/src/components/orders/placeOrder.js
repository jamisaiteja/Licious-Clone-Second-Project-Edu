import React,{useState,useEffect} from 'react';
import {useCart} from "../../Context/cartContext";
import "./placeOrder.css"
import Header from "../Header";
// import axios from 'axios';

// const url = "https://nodeliciousapi.onrender.com/product";
const poUrl = "https://nodeliciousapi.onrender.com/placeOrder";
// const poUrl = "http://localhost:9101/orders"

const PlaceOrder = (props)=>{
    // const [id] = useState(Math.floor(Math.random()*100000));
    // const [name,setName] = useState("Nikita");
    // const [email,setEmail] = useState("nikki@gmail.com");
    // const [phone,setPhone] = useState("987654321");
    // const [address,setAddress] = useState("Hno 61 Delhi");
    
    const [cart] = useCart();
    const [info,setInfo] = useState({
        id:Math.floor(Math.random()*100000),
        name:'Nikita',
        email:'nikki@gmail.com',
        price : sessionStorage.getItem("TotalPrice"),
        phone:'987654321',
        address:'Hno 61 Delhi',
        orderItems:''
    });

    // console.log(JSON.stringify(info));
    useEffect (() => {
        let orderId = [];
        cart.map((item)=>{
            orderId.push(item.id);
            return "ok";
        });
        setInfo({...info,orderItems:orderId});
        // console.log(typeof(orderId[0]));
        // console.log(typeof(JSON.stringify(orderId[0])));
        // let bodyData = JSON.stringify({id:orderId});
        // // console.log(bodyData);
        // fetch(url,{
        //     method:'POST',
        //     headers:{
        //         'accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:bodyData
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data);
        // });
    },[])
    
    const renderItem = (data)=>{
        if(data){
            // console.log(data);
            return data.map((p)=>{
                return(
                    <div className='container' key={p._id}>
                        <div className='row card flex-row justify-content-center p-2 m-2'>
                                <div className="col-12 col-md-2">
                                    <img
                                        src={p.imgUrl}
                                        className="cardImgTop"
                                        alt={p.name}
                                    />
                                </div>
                                <div className="col-md-10">
                                    <p className='name'>{p.name}</p>
                                    <p  className='description'>{p.description.substring(0, 150)} ....</p>
                                    <p className='quantity'> Quantity :{p.quantity}</p>
                                    <p className='price'>{p.price_tag} {p.currency} {p.price*p.quantity}</p>
                                </div>
                        </div>
                    </div>
                )
            })
        }
    }

    const handleChange =(event)=>{
        setInfo({...info,[event.target.name]:event.target.value})
    }


    const checkOut= ()=>{
        fetch(poUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(props.history.push('/viewBooking'))
        .then(console.log('Order Placed'))
    }

    // action="http://localhost:4100/paynow" method='POST'

    return(
        <>
            <Header/>
            <main>
                <div className="container">
                        <hr/>
                        <div className="panel panel-primary p-2">
                            <div className="panel-heading text-center">
                                <h1 className='p-2 orderTitle'>Your Order</h1>
                            </div>
                            <div className="panel-body p-2">
                                <form>
                                    <input type="hidden" name="cost" value={info.price}/>
                                    <input type="hidden" name="id" value={info.id}/>
                                    <div className="row mb-3">
                                        <label htmlFor="fname" className="col-sm-1 col-form-label text-center">FirstName :</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="fname" name="name"
                                            value={info.name} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                        <label htmlFor="email" className="col-sm-1 col-form-label text-center">Email :</label>
                                        <div className="col-sm-5">
                                        <input type="text" className="form-control" id="email" name="email"
                                            value={info.email} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="phone" className="col-sm-1 col-form-label text-center">Phone :</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="phone"name="phone"
                                            value={info.phone} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                        <label htmlFor="address" className="col-sm-1 col-form-label text-center">Address :</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="address" name="address"
                                            value={info.address} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                    </div>
                                    <h2 className='mt-3 orderTitle'>Order Items</h2>
                                    <hr/>
                                    {renderItem(cart)}
                                    <div className="row mt-3 p-3">
                                        <div className="col-md-12 d-flex justify-content-between">
                                            <h2>Total Price is Rs.{info.price}</h2>
                                            <button className="btn btn-danger" onClick={()=>checkOut()}
                                            type="submit">
                                                PlaceOrder
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </main>
        </>
    )
}

export default PlaceOrder;