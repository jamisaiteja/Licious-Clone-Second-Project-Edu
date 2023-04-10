import React,{useState,useEffect} from 'react';
import {useCart} from "../../Context/cartContext";
import DisplayOrder from "./DisplayOrder"
import Header from "../Header";
import axios from 'axios';
import "./placeOrder.css"

const oUrl = "https://nodeliciousapi.onrender.com/orders";
// const oUrl = "http://localhost:9101/orders";

const ViewOrder=(props)=>{
    const [orders,setOrders] = useState();

    useEffect (() => {
        // if(props.location){
        //     let query = props.location.search.split('&')
        //     if(query){
        //         let data={
        //             "status":query[0].split('=')[1],
        //             "date":query[2].split('=')[1],
        //             "bank_name":query[3].split('=')[1]
        //         }
        //         let id = query[1].split('=')[1].split('_')[1];
        //         console.log(id);
        //         // fetch(`${oUrl}/${id}`,{
        //         //     method:'PATCH',
        //         //     headers:{
        //         //         'Accept':'application/json',
        //         //         'Content-Type':'application/json'
        //         //     },
        //         //     body:JSON.stringify(data)
        //         // })
        //     }
        // }
        axios.get(`${oUrl}`).then((res) => {setOrders(res.data)})
        sessionStorage.removeItem("cart");
    },[])

    console.log(orders);
    return(
        <> 
            <Header/>
            <DisplayOrder orderData={orders}/>
        </>
    )
}

export default ViewOrder;