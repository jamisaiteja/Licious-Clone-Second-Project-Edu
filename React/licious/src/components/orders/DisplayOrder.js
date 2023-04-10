import React,{useState,useEffect} from 'react';
import {useCart} from "../../Context/cartContext";
import axios from 'axios';
import "./placeOrder.css"


const DisplayOrder=(props)=>{
    // const {orderData} = props;
    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.price}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <main>
            <div className="container">
                <center><h3>Orders</h3></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Bank Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default DisplayOrder;